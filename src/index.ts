import express from 'express';
import todoRoutes from '../src/routes/todos';
import bodyParser from 'body-parser';
const sequelize = require('./util/database');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(todoRoutes);

//syncing models to DB by creating tables
sequelize
  .sync()
  .then((result: any) => {
    console.log(result);
  })
  .catch((err: any) => console.log(err));
  
app.listen(port, () => {
  console.log(`Now listening at port: ${port}`);
});
