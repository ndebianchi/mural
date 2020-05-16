module.exports = (sequelize, DataTypes) => {
  const OcorrenciaPost = sequelize.define('OcorrenciaPost', {
    foto: DataTypes.STRING(256),
    status: DataTypes.INTEGER
  });

  OcorrenciaPost.associate = models => {
    OcorrenciaPost.belongsTo(models.Post, {
      foreignKey: 'post_id',
      as: 'post'
    })
  }
  return OcorrenciaPost;
}