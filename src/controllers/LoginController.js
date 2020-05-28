const service = require('../services/login.service')

class LoginControler {
    constructor(loginService){
        this.loginService = loginService
    }

    login = (req, res) => {
        this.loginService.authenticate(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'usuário ou Senha inválidos'}))
            .catch(console.log);
    }
}

module.exports = new LoginControler(service);