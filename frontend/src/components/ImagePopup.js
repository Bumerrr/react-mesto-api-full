import Popup from "./Popup";

function ImagePopup({ isOpen, name, onClose, card }) {

    return (
        <Popup isOpen={isOpen} name={name} onClose={onClose}>
            <div className="popup__container-window">
                <img className="popup__image-window" src={`${card ? card.link : ''}`} alt={card ? card.name : ''} />
                <h2 className="popup__title-window">{card ? card.name : ''}</h2>
                <button className="popup__close" onClick={onClose}></button>
            </div>
            </Popup>
    );
}

export default ImagePopup;