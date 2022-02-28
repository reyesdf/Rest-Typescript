"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("../src/routes/todos"));
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
const port = 5000;
app.use(bodyParser.json());
app.use(todos_1.default);
app.listen(port, () => {
    console.log(`Now listening at port: ${port}`);
});
