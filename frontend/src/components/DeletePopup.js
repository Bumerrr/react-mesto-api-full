// import React from 'react';

// function DeletePopup() {
//    return (
//       <div className="popup popup_delete">
//          <div className="popup__container">
//             <form className="form">
//                <h2 className="popup__title">Вы&nbsp;уверены ?</h2>
//                <button type="submit" className="form__save form__save_delete" value="Да">Да</button>
//                <button type="button" className="popup__close" aria-label="Close"></button>
//             </form>
//          </div>
//       </div>
//    );
// }

// export default DeletePopup;

// import Popup from "./Popup";

// function DeletePopup({ isOpen, name, onClose, card, ...props }) {

//     return (
//         <Popup isOpen={isOpen} name={name} onClose={onClose}>
//             <div className="popup__container-window">
//                 <img className="popup__image-window" src={`${card ? card.link : ''}`} alt={card ? card.name : ''} />
//                 <h2 className="popup__title-window">{card ? card.name : ''}</h2>
//                 <button className="popup__close" onClick={onClose}></button>
                
//             </div>
//             </Popup>
//     );
// }

// export default DeletePopup;


import PopupWithForm from './PopupWithForm';

export default function DeletePopup({card, isOpen, onClose, onDeleteCard}) {
  function handleDeleteCard(e) {
    e.preventDefault();
    onDeleteCard(card);
  }

  return (
    <PopupWithForm 
      title={'Вы уверены?'} 
      name={'confirm'} 
      button='Да' 
      isOpen={isOpen} 
      onClose={onClose}
      onSubmit={handleDeleteCard}
    >
    </PopupWithForm>
  )
}