// const { Apartamento, Usuario } = require('../../models')

// const testeController = {

//     index: async (req, res) => {
        
//         const resultado = await Usuario.findAll({include: 'apartamentos'})

//         res.json(resultado)
               
//     },
    
// }

// module.exports = testeController;

const { Post, Usuario, PostCategoria} = require('../../models')

const testeController = {

    index: async (req, res) => {
        
        const resultado = await Post.findAll({include: ['usuario', 'categoria']})

        res.json(resultado)
               
    },
    
}

module.exports = testeController;