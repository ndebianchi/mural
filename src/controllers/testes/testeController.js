const { Apartamento, Usuario, Post, PostPerdido, PostCategoria, FeedPost } = require('../../models')

const testeController = {

    index: async (req, res) => {
        
        const resultado = await Usuario.findAll({include: 'apartamentos'})

        res.json(resultado)
               
    },

    likesvistos: async (req, res) => {
        
        const feed = await FeedPost.findAll({include: ['post']})
        // const posts = await Post.findAll({include: ['usuario']})

        res.json(feed)
               
    },
    
    perdido: async (req, res) => {
        
        const resultado = await Post.findAll({include: ['usuario', 'postperdido']})

        res.json(resultado)
               
    },
}

module.exports = testeController;