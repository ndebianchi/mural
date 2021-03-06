module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    foto: DataTypes.STRING
  });  

  Usuario.associate = models => {
    
    Usuario.belongsTo(models.UsuarioTipo, {
      foreignKey: 'usuario_tipo_id',
      as: 'tipo'
    });

    Usuario.hasMany(models.Reserva, {
      foreignKey: 'usuario_id',
      as: 'reservas'
    })
    
    Usuario.belongsToMany(models.Apartamento, {
      through: 'apartamento_usuarios',
      foreignKey: 'usuario_id',
      as: 'apartamentos'
    })

    Usuario.hasMany(models.Post, {
    foreignKey: 'usuario_id',
    as: 'posts'
    })

    Usuario.belongsToMany(models.Post, {
    through: 'likes_vistos',
    foreignKey: 'usuario_id',
    as: 'post_likes'
    })

  };

  return Usuario;
};