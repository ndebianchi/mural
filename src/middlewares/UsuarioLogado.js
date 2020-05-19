const UsuarioLogado = (req, res, next) => {

    if(!req.session.usuario){
        res.redirect('/login?error=3')
    }
    
    next();
}

module.exports = UsuarioLogado;