import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditPopup from './EditPopup';
import AddPopup from './AddPopup';
import AvatarPopup from './AvatarPopup';
import DeletePopup from './DeletePopup';
import { useState, useEffect } from 'react';
import '../App.css';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';
import Login from './Login';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import authApi from '../utils/authApi';

function App() {
   const [cards, setCards] = useState([]);
   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
   const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
   const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
   const [isImagePopupOpen, setImagePopupOpen] = useState(false);
   const [currentUser, setCurrentUser] = useState({});
   const [isInfoTooltipSuccess, setIsInfoTooltipSuccess] = useState(false);
   const [isProfileEmail, setIsProfileEmail] = useState('')
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const historyUse = useHistory();

   useEffect(() => {
      api.getUserInfo()
         .then((res) => {
            console.log(res)
            setCurrentUser(res)
         })
         .catch((err) => console.log(err))
   }, []);

   function handleCardClick(card) {
      setImagePopupOpen(true);
      setSelectedCard(card);
   }

   function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
   }

   function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
   }

   function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
   }

   function closeAllPopups() {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setImagePopupOpen(false);
      setIsInfoTooltipPopupOpen(false);
      setSelectedCard({});
   }

   function handleUpdateUser(res) {
      api.changeUserInfo(res)
         .then((res) => {
            console.log(res)
            setCurrentUser(res);
            closeAllPopups();
         })
         .catch((err) => console.log(err));
   }

   function handleUpdateAvatar(res) {
      api.changeAvatar(res)
         .then((res) => {
            console.log(res)
            setCurrentUser(res);
            closeAllPopups();
         })
         .catch((err) => console.log(err));
   }

   function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      api.likeCard(card._id, !isLiked)
         .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
         })
         .catch((err) => console.log(err));
   }

   function handleCardDelete(deleteCard) {
      api.deleteCard(deleteCard._id)
         .then(() => {
            const newArr = (cards => cards.filter(card => card._id !== deleteCard._id));
            setCards(newArr);
         })
         .then((res) => console.log(res, "Карточка удалена"))
         .catch((err) => console.log(err));
   }

   useEffect(() => {
      api.getCards()
         .then((res) => {
            setCards(res)
         })
         .catch((err) => {
            console.log(err)
         })
   }, []);

   function handleAddPlaceSubmit(res) {
      api.createCard(res)
         .then((res) => {
            setCards([res, ...cards]);
            console.log(res);
            closeAllPopups();
         })
         .catch((err) => console.log(err));
   }

   useEffect(() => {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
         authApi.checkToken(jwt)
            .then(data => {
               if (data) {
                  setIsProfileEmail(data.data.email)
                  setIsLoggedIn(true)
                  historyUse.push('/');
                  console.log("Вы уже авторизованы, рады вас видеть снова")
               }
            })
            .catch(error => { console.log(error) })
      }
   }, [historyUse]);

   function handleLoginUser(email, password) {
      authApi.loginUser(email, password)
         .then(data => {
            if (data.token) {
               setIsProfileEmail(email)
               setIsLoggedIn(true);
               localStorage.setItem('jwt', data.token);
               historyUse.push('/');
            }
         })
         .catch(error => {
            setIsInfoTooltipPopupOpen(true);
            setIsInfoTooltipSuccess(false);
            console.log(error)
         })
   }

   function handleRegisterUser(email, password) {
      authApi.registerUser(email, password)
         .then(data => {
            if (data) {
               setIsInfoTooltipSuccess(true);
               historyUse.push('/sign-in');
            }
         })
         .catch(error => {
            setIsInfoTooltipSuccess(false);
            console.log(error);
         })
         .finally(
            () =>
               setIsInfoTooltipPopupOpen(true)
         );
   }

   const handleLogout = () => {
      localStorage.removeItem('jwt');
      setIsProfileEmail('')
      setIsLoggedIn(false);
      historyUse.push('/sign-in');
   }


   return (
      <CurrentUserContext.Provider value={currentUser}>
         <div className="page">
            <Header
               isLoggedIn={isLoggedIn}
               isProfileEmail={isProfileEmail}
               onLogout={handleLogout}
            />
            <Switch>
               <ProtectedRoute
                  exact path="/"
                  isLoggedIn={isLoggedIn}
                  component={Main}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
                  onCardClick={handleCardClick}
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
               />
               <Route path="/sign-up">
                  <Register
                     onRegister={handleRegisterUser}
                  />
               </Route>
               <Route path="/sign-in">
                  <Login
                     onLogin={handleLoginUser}
                  />
               </Route>
               <Route>
                  {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
               </Route>
            </Switch>
            <Footer />
            <EditPopup
               isOpen={isEditProfilePopupOpen}
               onClose={closeAllPopups}
               onUpdateUser={handleUpdateUser}
            />
            <AddPopup
               isOpen={isAddPlacePopupOpen}
               onClose={closeAllPopups}
               onAddPlace={handleAddPlaceSubmit}
            />
            <ImagePopup
               card={selectedCard}
               isOpen={isImagePopupOpen}
               onClose={closeAllPopups}

            />
            <DeletePopup />
            <AvatarPopup
               isOpen={isEditAvatarPopupOpen}
               onClose={closeAllPopups}
               onUpdateAvatar={handleUpdateAvatar}
            />
            <InfoTooltip
               isOpen={isInfoTooltipPopupOpen}
               onClose={closeAllPopups}
               isSuccess={isInfoTooltipSuccess}
            />
         </div>
      </CurrentUserContext.Provider>
   );
}

export default App;
