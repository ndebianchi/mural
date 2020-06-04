const { Apartamento, Usuario, Post, PostPerdido, FeedPost, OcorrenciaPost, Likes_vistos} = require('../models')

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
                    feeds: feeds.reverse(), 
                    postavisos
                })
               
    },

    novoPost: async (req, res) => {

        let { mensagem, tipo, foto } = req.body

        // Cria o post no DB Post: usuario_id, categoria_id, mensagem
        await Post.create({
            usuario_id: req.session.usuario.id,
            categoria_id: tipo,
            mensagem
        })

       let postCriado = await Post.findOne({where: {
            usuario_id: req.session.usuario.id,
            categoria_id: tipo,
            mensagem
        }})
        
       // Criar a relação no DB FeedPost: post_id, foto
       await FeedPost.create({
            post_id: postCriado.id,
            foto
        })

        // Redireciona para /inicio
        res.redirect('/inicio')
    },

    novaOcorrencia: async (req, res) => {

        let { mensagem, foto } = req.body

        // Cria o post no DB Post: usuario_id, categoria_id, mensagem
        await Post.create({
            usuario_id: req.session.usuario.id,
            categoria_id: 3,
            mensagem
        })

       let occCriada = await Post.findOne({where: {
            usuario_id: req.session.usuario.id,
            categoria_id: 3,
            mensagem
        }})
        
       // Criar a relação no DB FeedPost: post_id, foto
       await FeedPost.create({
            post_id: occCriada.id,
            foto
        })

        await OcorrenciaPost.create({
            post_id: occCriada.id,
            foto,
            status: 1
        })

        // Redireciona para /inicio
        res.redirect('/inicio')
    },

    addLike: async (req, res) => {
        let { id } = req.body;
        await Likes_vistos.create(
                {
                    post_id: id, 
                    usuario_id: req.session.usuario.id
                }, {where: {id}})

        res.redirect('/inicio');
    }
}

module.exports = InicioController;

