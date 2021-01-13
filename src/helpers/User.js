
class User {
    constructor() {
       this._token = '', 
            this._id = ''
    }
    setToken(token) {
        this._token = token
    }
    getToken() {
        if (this._token) {
            return this._token
        }
    }
}

export default User = new User