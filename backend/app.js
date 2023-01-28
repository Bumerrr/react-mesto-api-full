require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');
const auth = require('./middlewares/auth');
const authRoutes = require('./routes/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { NotFoundError } = require('./errors');

const { PORT = 3000, MONGO_URL } = process.env;

app.use(cors());
async function connect() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
    console.log(`server connect to ${MONGO_URL}`);
    app.listen(PORT);
    console.log(`server listen port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json());
app.use(limiter);
app.use(helmet());
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(authRoutes);
app.use('/users', auth, usersRoutes);
app.use('/cards', auth, cardsRoutes);
app.use(errorLogger);
// app.use(corsErr);
app.use('*', (req, res, next) => {
  next(new NotFoundError('Адреса по вашему запросу не существует'));
});
app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });
  next();
});

connect();
