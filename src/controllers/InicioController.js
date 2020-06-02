const { Apartamento, Usuario, Post, PostPerdido, FeedPost } = require('../models')

const InicioController = {

    index: async (req, res) => {
        
        const feeds = await FeedPost.findAll({
            include: [{
                    model: Post,
                    as: "post",
                    include: ["categoria",
                        {
                            model: Usuario,
                            as: "usuario",
                            include: ["apartamentos"]
                        },
                        "usuario_visualizado"
                    ]
                },

            ]
        })
        const postavisos = await Post.findAll({
            include: ["categoria",
            {
                model: Usuario,
                as: "usuario",
                include: ["apartamentos"]
            },
            "usuario_visualizado"
        ]
        })

        res.render('inicio', {
                    pageTitle: 'Mural',
                    usuario: req.session.usuario, 
                    feeds, 
                    postavisos
                })
               
    },

    novoPost: async (req, res) => {

        console.log(req.body)
        
    }
}

module.exports = InicioController;

