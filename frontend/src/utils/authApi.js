class AuthApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _handleResponse(result) {
    if (result.ok) {
      return result.json();
    } else {
      return Promise.reject(`Ошибка: ${result.status}`);
    }
  }
  
  loginUser(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(res => this._handleResponse(res))
    .then((data) => {
      localStorage.setItem('jwt', data.token)
      return data;
    })
  }

  registerUser(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => this._handleResponse(res));
  }

  checkToken() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => this._handleResponse(res));
  }

}

// const authApi = new AuthApi('http://localhost:3000'); // https://auth.nomoreparties.co 
const authApi = new AuthApi('https://api.bizit.nomoredomains.rocks');

export default authApi;