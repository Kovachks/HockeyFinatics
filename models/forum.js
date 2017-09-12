module.exports = function(sequelize, DataTypes) {
    var Topic = sequelize.define("topic", {
     topic_id: {
         type: DataTypes.INTEGER
    },
     opAuthor: {
       type: DataTypes.STRING,
        allowNull: false
     },     
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
    }
  });
    
    return Topic;

    var Reply = sequelize.define("reply", {
      topic_id: {
        type: DataTypes.INTEGER
    },
      author: {
        type: DataTypes.STRING,
        allowNull: false
    },
      create_at: {
        type: DataTypes.DATETIME
    },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
    },
      
  }); 

  return Reply;
};
  
