import React from "react";
import { Link, Route } from 'react-router-dom';
import logo from '../image/logo.svg'

function Header({ isLoggedIn, isProfileEmail, onLogout }) {

  return (
    <header className={`${isLoggedIn ? 'header' : 'header'}`}>
      <a href="#"><img aria-label="Логотип Mesto Russia" className="header__logo" src={logo} /></a>
      <Route path="/sign-in">
        <Link to='sign-up' className="header__link">Регистрация</Link>
      </Route>
      <Route path="/sign-up">
        <Link to='sign-in' className="header__link">Войти</Link>
      </Route>
      <Route exact path="/">
        <div className="header__info">
          <p className="header__email">{isProfileEmail}</p>
          <Link to='sign-in'
            onClick={() => {
              onLogout();
            }}
            className="header__btn-exit">Выйти</Link>
        </div>
      </Route>
    </header>
  );
}


export default Header;