const { FeedPost, Post, Usuario } = require('../models');

module.exports = {
  index: async (req, res) => {
    const posts = await Post.findAll({
      where: { usuario_id: req.session.usuario.id },
      include: [
        'categoria',
        'usuario_visualizado',
        {
          model: Usuario,
          as: 'usuario',
          include: ['apartamentos'],
          attributes: {
            exclude: ['email', 'senha', 'telefone'],
          },
        },
        'post_feed',
      ],
      attributes: {
        exclude: ['categoria_id', 'usuario_id'],
      },
    });

    return res.render('perfil', {
      usuario: req.session.usuario,
      posts: posts.reverse(),
    });
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Post.findByPk(id);
      await post.destroy();
      return res.redirect('/perfil?success=1');
    } catch (erro) {
      return res.redirect('/perfil?error=1');
    }
  },
  perfilMorador: async (req, res) => {
    
    const id = req.query.id;

    if (id == req.session.usuario.id){
      return res.redirect('/perfil')
    } else {

      const morador = await Usuario.findOne({
        where: { id } ,
        attributes: {
          exclude: ['senha'],
        },
        include: 'apartamentos'
      });
  
      const posts = await Post.findAll({
        where: { usuario_id: id },
        include: [
          'categoria',
          'usuario_visualizado',
          {
            model: Usuario,
            as: 'usuario',
            include: ['apartamentos'],
            attributes: {
              exclude: ['email', 'senha', 'telefone'],
            },
          },
          'post_feed',
        ],
        attributes: {
          exclude: ['categoria_id', 'usuario_id'],
        },
      });
  
      return res.render('morador', {
        usuario: req.session.usuario,
        morador,
        posts: posts.reverse()
      })

    } 
  }
};
