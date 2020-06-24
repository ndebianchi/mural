const {
  Apartamento,
  Usuario,
  Post,
  PostPerdido,
  FeedPost,
  OcorrenciaPost,
  Likes_vistos,
  PostCategoria,
} = require('../models');

const { Op } = require('sequelize');

module.exports = {
  index: async (req, res) => {
    const posts = await FeedPost.findAll({
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
    });

    const avisos = await Post.findAll({
      include: [
        {
          model: PostCategoria,
          as: 'categoria',
          where: { id: 1 },
        },
        {
          model: Usuario,
          as: 'usuario',
          include: ['apartamentos'],
        },
        {
          model: Usuario,
          as: 'usuario_visualizado',
        },
      ],
    });

    return res.render('inicio', {
      pageTitle: 'Mural',
      usuario: req.session.usuario,
      posts: posts.reverse(),
      avisos: avisos.reverse(),
    });
  },

  novoPost: async (req, res) => {
    const { mensagem, tipo } = req.body;

    let foto = '';
    if (req.file) foto = req.file.location;

    // Cria o post no DB Post: usuario_id, categoria_id, mensagem
    await Post.create({
      usuario_id: req.session.usuario.id,
      categoria_id: tipo,
      mensagem,
    });

    let postCriado = await Post.findOne({
      where: {
        usuario_id: req.session.usuario.id,
        categoria_id: tipo,
        mensagem,
      },
    });

    // Criar a relação no DB FeedPost: post_id, foto
    await FeedPost.create({
      post_id: postCriado.id,
      foto,
    });

    // Redireciona para /inicio
    return res.redirect('/inicio');
  },

  novaOcorrencia: async (req, res) => {
    const { mensagem } = req.body;
    const { id: usuario_id } = req.session.usuario;

    let foto = '';
    if (req.file) foto = req.file.location;

    // Cria o post no DB Post: usuario_id, categoria_id, mensagem
    await Post.create({
      usuario_id,
      categoria_id: 3,
      mensagem,
    });

    let occCriada = await Post.findOne({
      where: {
        usuario_id,
        categoria_id: 3,
        mensagem,
      },
    });

    // Criar a relação no DB FeedPost: post_id, foto
    await FeedPost.create({
      post_id: occCriada.id,
      foto,
    });

    await OcorrenciaPost.create({
      post_id: occCriada.id,
      foto,
      status: 1,
    });

    // Redireciona para /inicio
    return res.redirect('/inicio');
  },

  novoAviso: async (req, res) => {
    const { mensagem } = req.body;

    // Cria o post no DB Post: usuario_id, categoria_id, mensagem
    await Post.create({
      usuario_id: req.session.usuario.id,
      categoria_id: 1,
      mensagem,
    });

    // Redireciona para /inicio
    return res.redirect('/inicio');
  },

  addLike: async (req, res) => {
    //Buscando o id que vai vir dos parâmetros
    const { id } = req.params;

    //Buscando o usuário que está salvo na sessão
    const user = await Usuario.findByPk(req.session.usuario.id);

    //Buscando o post que o usuário deu like
    const post = await Post.findByPk(id, {
      include: 'usuario_visualizado',
    });

    //Verificando se o usuário já deu like antes
    const result = await post.hasUsuario_visualizado(user);
    console.log(result);
    console.log(post.usuario_visualizado.length);

    //Se sim, ele remove o link, se não ele adiciona
    if (result) {
      await post.removeUsuario_visualizado(user);
    } else {
      await post.addUsuario_visualizado(user);
    }

    //Redirecionando para o início
    return res.redirect('/inicio');
  },

  entendido: async (req, res) => {
    const { id } = req.body;
    await Likes_vistos.create(
      {
        post_id: id,
        usuario_id: req.session.usuario.id,
      },
      { where: { id } }
    );

    return res.redirect('/inicio');
  },

  filter: async (req, res) => {
    // const { post_tipo } = req.body;
    // const posts = await FeedPost.findAll({
    //   include: [
    //     {
    //       model: Post,
    //       as: 'post',
    //       include: [
    //         {
    //           model: PostCategoria,
    //           as: 'categoria',
    //           where: {
    //             id: {
    //               [Op.in]: post_tipo,
    //             },
    //           },
    //         },
    //         {
    //           model: Usuario,
    //           as: 'usuario',
    //           include: ['apartamentos'],
    //         },
    //         'usuario_visualizado',
    //       ],
    //     },
    //   ],
    // });
    // const avisos = await Post.findAll({
    //   include: [
    //     {
    //       model: PostCategoria,
    //       as: 'categoria',
    //       where: { id: 1 },
    //     },
    //     {
    //       model: Usuario,
    //       as: 'usuario',
    //       include: ['apartamentos'],
    //     },
    //     {
    //       model: Usuario,
    //       as: 'usuario_visualizado',
    //     },
    //   ],
    // });
    // return res.render('inicio', {
    //   pageTitle: 'Mural',
    //   usuario: req.session.usuario,
    //   posts: posts.reverse(),
    //   avisos: avisos.reverse(),
    // });
  },
};
