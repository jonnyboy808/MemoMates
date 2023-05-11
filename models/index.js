const User = require("./User");
const Note = require("./Note");
const Items = require("./Items");

User.hasMany(Note, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Note.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

Note.hasMany(Items, {});

Items.belongsTo(Note, {});

module.exports = { User, Note, Items };
