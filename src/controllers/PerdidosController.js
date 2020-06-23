const {
    Apartamento,
    Usuario,
    Post,
    PostPerdido,
    FeedPost,
    OcorrenciaPost,
    Likes_vistos,
  } = require('../models');

  module.exports = {
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

        return res.render('perdidos', {
            pageTitle: 'Achados e Perdidos',
            pageIcon: 'achados3.svg',
            usuario: req.session.usuario, 
            perdidos: perdidos.reverse()
        })
    },
    marcarConcluido: async (req, res) => {
      const { id } = req.body;
      await PostPerdido.update(
        { status: 2 },
        {
          where: { id },
        }
      );
  
      return res.redirect('/perdidos');
    },
    novoObjeto: async (req, res) => {
      const { mensagem } = req.body;

      let foto = '';
      if (req.file) foto = req.file.location;

      // Cria o post no DB Post: usuario_id, categoria_id, mensagem
      await Post.create({
        usuario_id: req.session.usuario.id,
        categoria_id: 8,
        mensagem,
      });
  
      let perCriado = await Post.findOne({
        where: {
          usuario_id: req.session.usuario.id,
          categoria_id: 8,
          mensagem,
        },
      });
  
      // Criar a relação no DB FeedPost: post_id, foto
      await PostPerdido.create({
        post_id: perCriado.id,
        foto,
        status: 1,
      });
  
      // Redireciona para /inicio
      return res.redirect('/perdidos');
      
    }
};
