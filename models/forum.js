module.exports = function(sequelize, DataTypes) {
    var Topic = sequelize.define("topic", {
     id: {
         type: DataTypes.INTEGER
    },
    team: {
      type: DataType.STRING
    },
     user: {
       type: DataTypes.STRING,
        allowNull: false
     },
     create_at: {
      type: DataTypes.DATETIME
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
      id: {
        type: DataTypes.INTEGER
    },
      user: {
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
  
