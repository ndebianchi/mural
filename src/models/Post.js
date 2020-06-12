module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    mensagem: DataTypes.STRING,
  });

  Post.associate = (models) => {
    Post.belongsTo(models.PostCategoria, {
      foreignKey: 'categoria_id',
      as: 'categoria',
    });

    Post.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario',
    });

    Post.belongsToMany(models.Usuario, {
      through: 'likes_vistos',
      foreignKey: 'post_id',
      as: 'usuario_visualizado',
    });

    Post.hasMany(models.PostPerdido, {
      foreignKey: 'post_id',
      as: 'usuario_likes',
    });

    Post.hasMany(models.FeedPost, {
      foreignKey: 'post_id',
      as: 'post_feed',
    });
  };

  return Post;
};
