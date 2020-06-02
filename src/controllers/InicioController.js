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

        let { mensagem, tipo, foto } = req.body

        console.log('mensagem: ' + mensagem)
        console.log('tipo: ' + tipo)
        console.log('Usuario ID: ' + req.session.usuario.id)

        // Criar o post no DB Post.create()
        //      usuario_id, categoria_id, mensagem
        
        // Criar a relação no DB FeedPost
        //      post_id, foto

        // Redireciona para /inicio
        res.redirect('/inicio')
    }
}

module.exports = InicioController;

