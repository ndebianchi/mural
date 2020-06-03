const { FeedPost, Post, Usuario } = require('../models');

const PerfilController = {
    index: async (req, res) => {       

        const feeds = await FeedPost.findAll({
            include: [{
                    model: Post,
                    as: "post",
                    include: [
                        "categoria",
                        "usuario_visualizado",
                        {
                            model: Usuario,
                            as: "usuario",
                            include: ["apartamentos"]
                        }
                        
                    ]
                }]   
        })      

        res.render('perfil', {
            pageTitle: 'Perfil',
            usuario: req.session.usuario,
            feeds: feeds.reverse()
        })
    }
}

module.exports = PerfilController;