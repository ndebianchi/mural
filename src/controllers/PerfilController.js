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
};
