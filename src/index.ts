import express from 'express';
import todoRoutes from '../src/routes/todos';
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(todoRoutes);

app.listen(port, () => {
  console.log(`Now listening at port: ${port}`);
});
