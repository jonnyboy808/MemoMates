const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    prompt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
    },

    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "notes",
  }
);

module.exports = Note;
