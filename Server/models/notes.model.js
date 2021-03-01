const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Note = sequelize.define("note", {
    Name: {
      type: Sequelize.STRING,
    },
    Password: {
      type: Sequelize.STRING,
    },
    // published: {
    //   type: Sequelize.BOOLEAN,
    // },
  });
  return Note;
};