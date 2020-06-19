const {
  OcorrenciaPost,
  Apartamento,
  Usuario,
  Post,
  PostPerdido,
  FeedPost,
} = require('../models');

const OcorrenciasController = {
  index: async (req, res) => {
    const ocposts = await OcorrenciaPost.findAll({
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

    return res.render('ocorrencias', {
      pageTitle: 'Ocorrências',
      pageIcon: 'ocorrencias.svg',
      usuario: req.session.usuario,
      ocposts,
      ocposts: ocposts.reverse(),
    });
  },

  marcarConcluido: async (req, res) => {
    const { id } = req.body;
    await OcorrenciaPost.update(
      { status: 2 },
      {
        where: { id },
      }
    );

    return res.redirect('/ocorrencias');
  },

  filtrar: async (req, res) => {
    let { dataInicio, dataFinal, status } = req.body;  
   
    const ocposts = await OcorrenciaPost.findAll({
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
          attributes: {
            include: ['created_at']
          },
        },
      ],
      order: [['status', 'DESC']],
    }); 

    let ocFiltro = ocposts.filter(a => {
      if(status == 0){
        return Date.parse(a.dataValues.post.dataValues.created_at) >= Date.parse(dataInicio) &&
               Date.parse(a.dataValues.post.dataValues.created_at) <= Date.parse(dataFinal)
      } else {
        return Date.parse(a.dataValues.post.dataValues.created_at) >= Date.parse(dataInicio) &&
               Date.parse(a.dataValues.post.dataValues.created_at) <= Date.parse(dataFinal) &&
               a.dataValues.status == status
      }     
    })

    return res.render('ocorrencias', {
      pageTitle: 'Ocorrências',
      pageIcon: 'ocorrencias.svg',
      usuario: req.session.usuario,
      ocposts: ocFiltro.reverse(),
    });
  }

};

module.exports = OcorrenciasController;
