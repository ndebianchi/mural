module.exports = (sequelize, DataTypes) => {
    const PostPerdido = sequelize.define('PostPerdido', {
      foto: DataTypes.STRING,
      status: DataTypes.INTEGER
    }, {
        tableName: 'perdidos_posts',
    });  

    PostPerdido.associate = models => {
      
      PostPerdido.belongsTo(models.Post, {
        foreignKey: 'post_id',
        as: 'post'
      });      
    };
  
    return PostPerdido;
  };