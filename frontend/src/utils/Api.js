class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: "GET",
      headers: this._headers
    })
      .then((res) => this._checkServer(res))
  }

  getCards() {
    return fetch(this._baseUrl + '/cards', {
      method: "GET",
      headers: this._headers
    })
      .then((res) => this._checkServer(res))
  }

  createCard(data) {
    return fetch(this._baseUrl + '/cards', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        "name": data.name,
        "link": data.link,
      })
    })
      .then((res) => this._checkServer(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    })
      .then((res) => this._checkServer(res));
  }

  changeUserInfo(data) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
      .then((res) => this._checkServer(res))
  }

  likeCard(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: this._headers,
    })
      .then((res) => this._checkServer(res));
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers
    })
      .then((res) => this._checkServer(res));
  }

  changeAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
      .then((res) => this._checkServer(res));
  }

  _checkServer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-51',
    headers: {
      authorization: 'b84ca8c8-70d1-421e-a05d-8cb603f10d20',
      'Content-Type': 'application/json'
  }
});