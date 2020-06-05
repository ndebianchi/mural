module.exports = (sequelize, DataTypes) => {
    const Likes_vistos = sequelize.define('Likes_vistos', {
     
      })
      Likes_vistos.associate = function (models) {
          Likes_vistos.belongsTo(models.Usuario)
          Likes_vistos.belongsTo(models.Post)
    }
    // Methods
    return Likes_vistos;
  }