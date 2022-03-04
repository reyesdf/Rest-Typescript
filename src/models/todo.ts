const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//creating Model or Table
//define('table name', 'fields')
const Todo = sequelize.define('todo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  todo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  priority: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Todo;
