const {
    Apartamento,
    Usuario,
    Post,
    PostPerdido,
    PostCategoria,
    FeedPost, 
    Local, 
    OcorrenciaPost
} = require('../../models')

const testeController = {

    index: async (req, res) => {
        const resultado = await OcorrenciaPost.findAll({
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
        res.json(resultado)
    },

    likesvistos: async (req, res) => {

        const feed = await FeedPost.findAll({
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

        res.json(feed)

    },

    perdido: async (req, res) => {

        const resultado = await Post.findAll({
            include: ["categoria",
            {
                model: Usuario,
                as: "usuario",
                include: ["apartamentos"]
            },
            "usuario_visualizado"
        ]
        })

        res.json(resultado)

    },
}

module.exports = testeController;