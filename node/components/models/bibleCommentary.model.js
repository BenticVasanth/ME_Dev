module.exports = (sequelize, DataTypes) => {
  const BibleCommentary = sequelize.define("BibleCommentary", {
    BibleCommentaryId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING
    },
    Author: {
      type: DataTypes.INTEGER
    },
    FilePath: {
      type: DataTypes.STRING
    },
    IsActive: {
      type: DataTypes.BOOLEAN
    },
    CreatedDateAndTime: {
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  return BibleCommentary;
};
