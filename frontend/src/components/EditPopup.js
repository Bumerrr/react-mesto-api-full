import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditPopup(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleAboutChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name={'editing'}
            title='Редактировать профиль'
            button='Сохранить'
            form={'popup__form-profile'}
            formName={'formChange'}
        >
            <label className='form__label'>
                <input
                    type='text'
                    id='inpup-name'
                    placeholder='Имя'
                    name={name}
                    value={name || ''}
                    className="popup__info popup__info_type_name form__input"
                    minLength="2"
                    maxLength="40"
                    onChange={handleNameChange}
                    required
                />
                <span className='form__active-error inpup-name-error'></span>
            </label>
            <label className='form__label'>
                <input
                    type='text'
                    id='inpup-about'
                    placeholder='Описание'
                    name={description}
                    value={description || ''}
                    className="popup__info  popup__info_type_text form__input"
                    minLength="2"
                    maxLength="40"
                    onChange={handleAboutChange}
                    required
                />
                <span className='form__active-error input-about-error'></span>
            </label>
        </PopupWithForm>
    );
}

export default EditPopup;