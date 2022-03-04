import { Sequelize } from 'sequelize';

//parameters: db_name, uname, pw : connecting to db
const sequelize = new Sequelize('todo', 'root', 'admin123', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
