const InicioController = {
    index: (req, res) => {

        let usuario = req.session.usuario;

        // // deixa aqui ou por middleware?
        // if(!req.session.usuario){
        //     res.redirect('/login');
        // }

        res.render('inicio', {
            pageTitle: 'Mural',
            usuario
        })
    }
}

module.exports = InicioController;