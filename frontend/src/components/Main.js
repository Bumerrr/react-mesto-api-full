import React from 'react';
import plus from '../image/добавить.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <img className="profile__avatar" src={currentUser.avatar} alt="изображение профиля на сайте" />
                <div className="profile__avatar-pencil" onClick={props.onEditAvatar}></div>
                <div className="profile__info">
                    <h2 className="profile__info-name">{currentUser.name}</h2>
                    <button className="profile__info-button" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__info-text">{currentUser.about}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}><img src={plus}
                    alt="кнопка добавить" /></button>
            </section>
            <section className="elements" aria-label="фотографии">
                <ul className="elements__list">
                    {props.cards.map((card) => (
                        <Card
                            card={card}
                            key={card._id}
                            name={card.name}
                            link={card.link}
                            likes={card.likes.length}
                            onCardClick={props.onCardClick}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;