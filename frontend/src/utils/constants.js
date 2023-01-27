export const popupEditingOpenButton = document.querySelector(".profile__info-button");
export const popupEdit = document.querySelector(".popup_editing");
export const formPopupEditing = popupEdit.querySelector(".form");
export const popupEditContainer = popupEdit.querySelector('.popup__container');
export const nameInputPopupEditing = popupEdit.querySelector(".popup__info_type_name");
export const jobInputPopupEditing = popupEdit.querySelector(".popup__info_type_text");
export const nameProfile = document.querySelector(".profile__info-name");
export const textProfile = document.querySelector(".profile__info-text");
export const popupEditCloseButtonOnSaved = popupEdit.querySelector(".form__save");
export const popupAdd = document.querySelector(".popup_add");
export const popupAddOpenButton = document.querySelector(".profile__button-add");
export const formPopupAdd = popupAdd.querySelector(".form");
export const popupAddContainer = popupAdd.querySelector('.popup__container');
export const inputPlaceTitlePopupAdd = popupAdd.querySelector('.popup__info_type_title');
export const inputPlaceLinkPopupAdd = popupAdd.querySelector('.popup__info_type_link');
export const containerItems = document.querySelector(".elements__item");

export const templateCards = '#elements-add';

export const formAdd = document.querySelector('.form_add-card');
export const formEdit = document.querySelector('.popup__form-profile');
export const buttonsClose = document.querySelectorAll('.popup__close');
export const cardsBlock = document.querySelector('.elements__list');
export const popupWindowBigImage = document.querySelector('.popup_window');
export const popupWindowContainer = popupWindowBigImage.querySelector('.popup__container-window');
export const popupWindowImg = popupWindowBigImage.querySelector('.popup__image-window');
export const popupWindowTitle = popupWindowBigImage.querySelector('.popup__title-window');
export const popupList = document.querySelectorAll('.popup');

//кнопка открытия попап аватар
export const popupAvatarOpenButton = document.querySelector(".profile__avatar-pencil");

export const popupDeleteOpenButton = document.querySelector(".elements__delete");

export const btnSavePopupSelector = document.querySelector(".form__save");
// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
export const bmw = new URL('../image/bmw.jpg', import.meta.url);
export const audi = new URL('../image/audi.jpg', import.meta.url);
export const bmwRed = new URL('../image/bmwred.jpg', import.meta.url)
// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
export const mers = new URL('../image/mers.jpg', import.meta.url);
export const allCar = new URL('../image/allcar.jpg', import.meta.url);
export const mst = new URL('../image/mst.jpg', import.meta.url)

export const initialCards = [
  {
    name: 'Blue',
    link: bmw
  },
  {
    name: 'Yellow',
    link: audi
  },
  {
    name: 'Red',
    link: bmwRed
  },
  {
    name: 'Grey',
    link: mers
  },
  {
    name: 'Different',
    link: allCar
  },
  {
    name: 'Black',
    link: mst
  }
];

export const validatorConfig = {
  formSelector: "form",
  inputSelector: "form__input",
  submitButtonSelector: "form__save",
  inactiveButtonClass: "form__save_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__active-error_visible",
};

export const formValidators = {};

export const formConfiguration = {
  inputSelector: "form__input",
  submitButtonSelector: "form__save",
  formSelector: "form",
};

export const popupConfiguration = {
  activeModifier: 'popup_opened',
  closeButtonSelector: 'popup__close',  
};

export const cardsContainerSelector = 'elements__list';
export const newPlacePopupSelector = 'popup_add';
export const profilePopupSelector = 'popup_editing';
export const imagePopupSelector = 'popup_window';
export const profileFormName = 'formChange';
export const newPlaceFormName = 'formAdd';
export const avatarPopupSelector = 'popup_avatar';
export const profileAvatar = 'formAvatar';
export const deletePopupSelector = 'popup_delete';


export const profileConfiguration = {
  titleSelector: "profile__info-name",
  jobSelector: "profile__info-text",
  avatarSelector: "profile__avatar",
};

export const bigImagePopupConfiguration = {
  imageSelector: "popup__image-window",
  captionSelector: "popup__title-window",
};
