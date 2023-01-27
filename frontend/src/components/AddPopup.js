import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPopup(props) {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleAddName(e) {
        setName(e.target.value);
    }

    function handleAddLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name,
            link
        });
    }

    useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name={'add'}
            title='Новое место'
            button='Создать'
            form={'form_add-card'}
            formName={'formAdd'}
        >
            <label className='form__label'>
                <input
                    type='text'
                    id='input-name'
                    placeholder='Название'
                    className="popup__info popup__info_type_name form__input"
                    minLength="2"
                    required
                    name={name}
                    value={name || ''}
                    onChange={handleAddName}
                />
                <span className='form__active-error input-name-error'></span>
            </label>
            <label className='form__label'>
                <input
                    type='url'
                    id='inpup-link'
                    placeholder='Ссылка на картинку'
                    className="popup__info  popup__info_type_link form__input"
                    minLength="2"
                    required
                    name={link}
                    value={link || ''}
                    onChange={handleAddLink}
                />
                <span className='form__active-error input-link-error'></span>
            </label>
        </PopupWithForm>
    );
}

export default AddPopup;