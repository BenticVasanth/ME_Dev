module.exports = (sequelize, DataTypes) => {
  const Sabbath = sequelize.define("Documents", {
    IntId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    DocumentID: {
      type: DataTypes.STRING
    },
    CategoryId: {
      type: DataTypes.INTEGER
    },
    Title: {
      type: DataTypes.STRING
    },
    FilePath: {
      type: DataTypes.STRING
    },
    DownloadCount: {
      type: DataTypes.INTEGER
    },
    DocumentReference: {
      type: DataTypes.STRING
    },
    CreatedBy: {
      type: DataTypes.STRING
    },
    CreatedDateTime: {
      type: DataTypes.DATE
    },
    Status: {
      type: DataTypes.BOOLEAN
    },
    ImagesPath: {
      type: DataTypes.STRING
    },
    Description: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  return Sabbath;
};
