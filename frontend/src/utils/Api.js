class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  getUserInfo() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then((res) => this._checkServer(res)) 
  }

  getCards() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then((res) => this._checkServer(res))
  }

  createCard(data) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => this._checkServer(res));
  }

  deleteCard(cardId) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then((res) => this._checkServer(res));
  }

  changeUserInfo(data) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
      .then((res) => this._checkServer(res))
  }

  likeCard(cardId, isLiked) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then((res) => this._checkServer(res));
  }

  deleteLike(cardId) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then((res) => this._checkServer(res));
  }

  changeAvatar(data) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
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

export const api = new Api('http://localhost:3000');