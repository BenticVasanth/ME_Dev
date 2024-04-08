module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("Users_Test", {
    id: {
      field: "UserId",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING
    },
    Mobile: {
      type: DataTypes.STRING
    },
    Email: {
      type: DataTypes.STRING
    },
    Password: {
      type: DataTypes.STRING
    },
    UserIP: {
      type: DataTypes.STRING
    },
    Location: {
      type: DataTypes.STRING
    },
    UserType: {
      type: DataTypes.STRING
    },
    createdAt: {
      field: "CreatedDateTime",
      type: DataTypes.DATE
    },
    IsActive: {
      type: DataTypes.BOOLEAN
    },
    IsNotification: {
      type: DataTypes.BOOLEAN
    }
  }, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });

  return User;
};

