const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // const User = sequelize.define("Users_Test", {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    Mobile: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    UserIP: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    UserType: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    CreatedDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null
    },
    IsNotification: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null
    }
  }, {
    sequelize: sequelize,
    modelName: 'User',
    tableName: 'Users_Test',
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    underscore: true
  });

  return User;
};
