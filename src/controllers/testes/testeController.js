const { Apartamento, Usuario, Post, PostPerdido } = require('../../models')

const testeController = {

    index: async (req, res) => {
        
        const resultado = await Usuario.findAll({include: 'apartamentos'})

        res.json(resultado)
               
    },

    likesvistos: async (req, res) => {
        
        const resultado = await Post.findAll({include: ['usuario', 'usuarioviu']})

        res.json(resultado)
               
    },
    
    perdido: async (req, res) => {
        
        const resultado = await Post.findAll({include: ['usuario', 'postperdido']})

        res.json(resultado)
               
    },
}

module.exports = testeController;