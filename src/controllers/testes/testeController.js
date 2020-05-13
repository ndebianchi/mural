const { Apartamento, Usuario, Post } = require('../../models')

const testeController = {

    index: async (req, res) => {
        
        const resultado = await Usuario.findAll({include: 'apartamentos'})

        res.json(resultado)
               
    },

    likesvistos: async (req, res) => {
        
        const resultado = await Post.findAll({include: ['usuario', 'usuarioviu']})

        res.json(resultado)
               
    },
    
}

module.exports = testeController;