import React from 'react';
import PopupWithForm from './PopupWithForm';
import {useRef, useState, useEffect} from 'react';

function AvatarPopup(props) {
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    useEffect(() => {
        avatarRef.current.value = '';
    }, [props.isOpen]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name={'avatar'}
            title='Обновить аватар'
            button='Сохранить'
            form={'form_change-avatar'}
            formName={'formAvatar'}
        >
            <label className='form__label'>
                <input
                    type='url'
                    id='input-avatar'
                    placeholder='Ссылка на картинку'
                    className='popup__info popup__info_type_avatar form__input'
                    minLength='2'
                    name="avatar"
                    ref={avatarRef}
                    required
                />
                <span className='form__active-error input-avatar-error'></span>
            </label>
        </PopupWithForm>
    );
}

export default AvatarPopup;