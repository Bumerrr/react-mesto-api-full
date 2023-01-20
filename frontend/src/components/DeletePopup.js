import React from 'react';

function DeletePopup() {
   return (
      <div className="popup popup_delete">
         <div className="popup__container">
            <form className="form">
               <h2 className="popup__title">Вы&nbsp;уверены ?</h2>
               <button type="submit" className="form__save form__save_delete" value="Да">Да</button>
               <button type="button" className="popup__close" aria-label="Close"></button>
            </form>
         </div>
      </div>
   );
}

export default DeletePopup;