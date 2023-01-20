import React from 'react';
import Popup from './Popup';

function PopupWithForm({ isOpen, name, onClose, ...props }) {
    return (
        <Popup isOpen={isOpen} name={name} onClose={onClose}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <button type="button" className="popup__close" onClick={onClose} aria-label="Close"></button>
                <form className={`form ${props.form}`} name={`${props.formName}`} onSubmit={props.onSubmit} formNoValidate>
                    {props.children}
                    <button type="submit" className="form__save" value={`${props.button}`} >{props.button}</button>
                </form>
            </div>
        </Popup>
    );
}

export default PopupWithForm;