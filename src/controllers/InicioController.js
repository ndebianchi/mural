const { Apartamento, Usuario, Post, PostPerdido, FeedPost } = require('../models')

const InicioController = {

    index: async (req, res) => {
        
        const posts = await Post.findAll({include: ['usuario', 'categoria', 'usuario_visualizado']})
        const feed = await FeedPost.findAll({include: ['post']})
        // const posts = await Post.findAll({include: ['usuario']})

        // res.json(posts)

        res.render('inicio', {
                    pageTitle: 'Mural',
                    usuario: req.session.usuario,
                    posts, 
                    feed
                })
               
    },
    // index: (req, res) => {

    //     let usuario = req.session.usuario;

    //     // // deixa aqui ou por middleware?
    //     // if(!req.session.usuario){
    //     //     res.redirect('/login');
    //     // }

    //     res.render('inicio', {
    //         pageTitle: 'Mural',
    //         usuario
    //     })
    // }
}

module.exports = InicioController;

