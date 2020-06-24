const { FeedPost, Post, Usuario, PostCategoria } = require('../models');
const { Op } = require('sequelize');

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
    const { id } = req.query;

    if (id == req.session.usuario.id) {
      return res.redirect('/perfil');
    } else {
      const morador = await Usuario.findOne({
        where: { id },
        attributes: {
          exclude: ['senha'],
        },
        include: 'apartamentos',
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
        posts: posts.reverse(),
      });
    }
  },
  filter: async (req, res) => {
    let { post_tipo } = req.body;

    if (!Array.isArray(post_tipo)) post_tipo = [post_tipo];

    const posts = await Post.findAll({
      where: { usuario_id: req.session.usuario.id },
      include: [
        {
          model: FeedPost,
          as: 'post_feed',
        },
        {
          model: PostCategoria,
          as: 'categoria',
          where: {
            id: {
              [Op.in]: post_tipo,
            },
          },
        },
        {
          model: Usuario,
          as: 'usuario',
          include: ['apartamentos'],
          attributes: {
            exclude: ['email', 'senha', 'telefone'],
          },
        },
        'usuario_visualizado',
      ],
      attributes: {
        exclude: ['categoria_id', 'usuario_id'],
      },
      order: [['created_at', 'DESC']],
    });

    return res.render('perfil', {
      usuario: req.session.usuario,
      posts,
    });
  },
};
