const { OcorrenciaPost, Apartamento, Usuario, Post, PostPerdido, FeedPost } = require('../models')

const OcorrenciasController = {
    index: async (req, res) => {
        const ocposts = await OcorrenciaPost.findAll({
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
                }
            ],
            order: [
                ['status', 'DESC']
          ]
        })


        res.render('ocorrencias', {
            pageTitle: 'Ocorrências',
            pageIcon: 'ocorrencias.svg',
            usuario: req.session.usuario,
            ocposts,
            ocposts: ocposts.reverse()
        })
    },

    marcarConcluido: async (req, res) => {
        let { id } = req.body;
        await OcorrenciaPost.update({status: 2}, {
            where: {id}
        });
        
        res.redirect('/ocorrencias');
    }
}

module.exports = OcorrenciasController;