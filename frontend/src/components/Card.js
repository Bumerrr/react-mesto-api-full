import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
        `elements__delete ${isOwn ? 'elements__delete_active' : 'elements__delete_hidden'}`
    );


    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = `elements__card-button ${isLiked ? 'elements__card-button_active' : ''}`;

    


    function handleCardClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (

        <li className="elements__item">
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} ></button>
            <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
            <div className="elements__card">
                <h2 className="elements__card-title">{props.card.name}</h2>
                <div className="elements__card-likes">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}>
                    </button>
                    <span className="elements__card-number">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;