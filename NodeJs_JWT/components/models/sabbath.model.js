module.exports = (sequelize, DataTypes) => {
  const Sabbath = sequelize.define("Documents", {
    id: {
      field: "IntId",
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
    createdAt: {
      field: "CreatedDateTime",
      type: DataTypes.DATE,
      defaultValue: sequelize.Sequelize.fn('getdate'),
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
