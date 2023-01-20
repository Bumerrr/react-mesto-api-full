const { BadRequestError } = require('../errors');

function validateUrl(url) {
  const test = /^https?:\/\/(www\.)?[a-zA-Z\d]+\.[\w\-._~:/?#[\]@!$&'()*+,;=]{2,}#?$/g;
  if (test.test(url)) {
    return url;
  }
  throw new Error('Невалидная ссылка');
}

const validationId = (id) => {
  if (/^[0-9a-fA-F]{24}$/.test(id)) {
    return id;
  }
  throw new BadRequestError('Передан некорретный id.');
};

module.exports = { validateUrl, validationId };
