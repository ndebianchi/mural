const LoginController = {
    index: (req, res) => {
        res.render('login', {
            pageTitle: 'Mural | Login'
        })
    }
}

module.exports = LoginController;