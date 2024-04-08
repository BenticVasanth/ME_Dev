module.exports = (sequelize, DataTypes) => {
  const SessionDetails = sequelize.define("SessionDetails", {
    id: {
      field:"Id",
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    SessionId: {
      type: DataTypes.STRING
    },
    CreatedDateTime: {
      type: DataTypes.DATE
    },
    UpdatedDateTime: {
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  return SessionDetails;
};
