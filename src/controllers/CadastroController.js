const { Usuario, Apartamento, ApartamentoUsuario, sequelize } = require('../models')
const bcrypt = require('bcrypt')

const CadastroController = {
    index: (req, res) => {
        res.render('cadastro', {
            pageTitle: 'Novo Cadastro',
            pageIcon: 'user.svg',
            usuario: req.session.usuario
        })
    },
    create: async (req, res) => {
        
        let { apartamento, bloco, nome, sobrenome, email, telefone, senha } = req.body;
        
        // Adicionar solução de upload de foto aqui (multer?)
        let foto = 'default.svg'        

     
        // Gambiarra do Apartamento - Substituir pelo Apto enviado pelo Sindico

        // Checa se o apartamento já existe. - Usado para criar relação apartamento-usuario
        let apto = await Apartamento.findOne({where: { numero: apartamento, bloco }}) 

        // Se não existir, cria um novo
        if(!apto){
            await Apartamento.create({
            bloco,
            numero: apartamento
            })

            apto = await Apartamento.findOne({where: { numero: apartamento, bloco }})  
        }
        
                       
      
        // Cria usuario a partir dos dados passados
        await Usuario.create({
            nome,
            sobrenome,
            email,
            senha: bcrypt.hashSync(senha, 10),
            telefone,
            foto,            
            usuario_tipo_id: 1
        })


        // Variaveis para criação da relação apartamento-usuario                
        let novoUsuario = await Usuario.findOne({where: {nome, sobrenome, email}})

        
        // Cria relação apartamento-usuario
        await ApartamentoUsuario.create({
            apartamento_id: apto.id,
            usuario_id: novoUsuario.id
        })


        // Feedback de Sucesso


        // Redireciona para Login
        res.redirect('/login')

    }
}

module.exports = CadastroController;