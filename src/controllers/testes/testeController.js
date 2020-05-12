const { Apartamento, Usuario } = require('../../models')

const testeController = {

    index: async (req, res) => {
        
        const resultado = await Usuario.findAll({include: 'apartamentos'})

        res.json(resultado)
               
    },
    
}

module.exports = testeController;