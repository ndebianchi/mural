const {
    Apartamento,
    Usuario,
    Post,
    PostPerdido,
    FeedPost,
    OcorrenciaPost,
    Likes_vistos,
  } = require('../models');

const PerdidosController = {
    index: async (req, res) => {
        const perdidos = await PostPerdido.findAll({
            include: [
              {
                model: Post,
                as: 'post',
                include: [
                  'categoria',
                  {
                    model: Usuario,
                    as: 'usuario',
                    include: ['apartamentos'],
                  },
                  'usuario_visualizado',
                ],
              },
            ],
            order: [['status', 'DESC']],
          });

        res.render('perdidos', {
            pageTitle: 'Achados e Perdidos',
            pageIcon: 'achados3.svg',
            usuario: req.session.usuario, 
            perdidos: perdidos.reverse()
        })
    }
}

module.exports = PerdidosController;