module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("Users_Test", {
    id: {
      field: "UserId",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"UserId" is required' }
      }
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"Name" is required' }
      }
    },
    Mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"Mobile" is required' }
      }
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"Email" is required' }
      }
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"Password" is required' }
      }
    },
    UserIP: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"UserIP" is required' }
      }
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"Location" is required' }
      }
    },
    UserType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"UserType" is required' }
      }
    },
    createdAt: {
      field: "CreatedDateTime",
      type: DataTypes.DATE,
      defaultValue: sequelize.Sequelize.fn('getdate'),
      validate: {
        notEmpty: { msg: '"CreatedDateTime" is required' }
      }
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"IsActive" is required' }
      }
    },
    IsNotification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: { msg: '"IsNotification" is required' }
      }
    }
  }, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: false,
    sequelize 
  });

  return User;
};

