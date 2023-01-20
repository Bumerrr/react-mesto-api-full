import React from "react";
import Popup from "./Popup";

function InfoTooltip({ isOpen, name, onClose, ...props }) {

    return (
        <Popup isOpen={isOpen} name={name} onClose={onClose}>
            <div className="popup__container">
                <div
                    className={`popup__status ${props.isSuccess ? 'popup__status_success' : 'popup__status_false'}`}
                >
                </div>
                <h2 className="popup__title">
                    {props.isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}
                </h2>
                <button
                    type="button"
                    aria-label="Кнопка закрытия окна"
                    className="popup__close"
                    onClick={onClose}>
                </button>
            </div>
        </Popup>
    )
}

export default InfoTooltip;