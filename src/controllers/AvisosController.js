const { Post, Usuario } = require('../models');
module.exports = {
  index: async (req, res) => {
    const avisos = await Post.findAll({
      where: { categoria_id: 1 },
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
        include: ['created_at'],
        exclude: ['categoria_id', 'usuario_id'],
      },
    });
    return res.render('avisos', {
      usuario: req.session.usuario,
      avisos: avisos.reverse(),
    });
  },
};
