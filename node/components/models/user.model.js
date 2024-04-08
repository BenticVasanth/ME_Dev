module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("Users_Test", {
    id: {
      field:"UserId",
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING
    },
    Mobile: {
      type: DataTypes.INTEGER
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
    CreatedDateTime: {
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
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  return User;
};
