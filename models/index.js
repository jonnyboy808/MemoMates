const User = require("./User");
const Note = require("./Note");
const Items = require("./Items");

User.hasMany(Note, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Note.belongsTo(User, {
  foreignKey: "user_id",
});

Note.hasMany(Items, {
  onDelete: "CASCADE",
});

Items.belongsTo(Note, {
  foreignKey: "note_id",
});

module.exports = { User, Note, Items };
