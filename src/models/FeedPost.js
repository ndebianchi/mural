module.exports = (sequelize, DataTypes) => {
  const FeedPost = sequelize.define('FeedPost', {
    foto: DataTypes.STRING(256)
  });

  FeedPost.associate = models => {
    FeedPost.belongsTo(models.Post, {
      foreignKey: 'post_id',
      as: 'post'
    })
  }

  return FeedPost;
}