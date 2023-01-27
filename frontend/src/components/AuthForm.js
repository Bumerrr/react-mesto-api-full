import React from 'react';

function AuthForm({handleSubmit, isEmail, handleChangeEmail, inputPasswordError, inputEmailError, inputPasswordRide, handleChangePassword, isPassword, inputPasswordTouch, inputEmailRide, inputEmailTouch, ...props}) {
    return (
        <form
            className="auth"
            onSubmit={handleSubmit}
            name="signInForm"
            formNoValidate
        >
            <h2 className="auth__title">{'aaaaaaaaaaa'}</h2>
            <input
                className={`auth__form ${!props.inputEmailRide && inputEmailTouch && 'auth__form_type_error'}`}
                value={isEmail || ''}
                onChange={handleChangeEmail}
                placeholder="Email"
                type="email"
                name="email"
                id="emailInput"
                required
                formNoValidate
            />
            <span className={`auth__input-error ${!inputEmailRide && inputEmailTouch && 'auth__input-error_active'}`}>
                {inputEmailError}
            </span>
            <input
                className={`auth__form ${!inputPasswordRide && inputPasswordTouch && 'auth__form_type_error'}`}
                value={isPassword || ''}
                onChange={handleChangePassword}
                placeholder="Пароль"
                type="password"
                name="password"
                id="passwordInput"
                required
                formNoValidate
            />
            <span className={`auth__input-error ${!inputPasswordRide && inputPasswordTouch && 'auth__input-error_active'}`}>
                {inputPasswordError}
            </span>
            <button className="auth__button" type="submit" aria-label="Кнопка для входа">{props.headerLink}</button>
        </form>
    );
}

export default AuthForm;