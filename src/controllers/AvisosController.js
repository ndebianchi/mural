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
  avisosFiltrados: async (req, res) => {
    let { dataInicio, dataFinal } = req.body;   

    const avisos = await Post.findAll({
      where: { 
        categoria_id: 1        
       },
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
    
    let avisosFiltrados = avisos.filter(a => {
      return Date.parse(a.dataValues.created_at) >= Date.parse(dataInicio) &&
             Date.parse(a.dataValues.created_at) <= Date.parse(dataFinal)            
    })   
    
    return res.render('avisos', {
      usuario: req.session.usuario,
      avisos: avisosFiltrados.reverse(),
    });
  }
};
