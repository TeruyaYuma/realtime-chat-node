'use strict';
 
import express  from 'express'
import * as io from "socket.io"
import { createServer } from 'http'
import router from "./app/src/interface/router/index.js"

const app = express();
const server = createServer(app); 
const socketio = new io.Server(server);

socketio.on("connection", (socket) => {
  console.log('soketIo connection')
})

// const { Sequelize } = require('sequelize');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
//   username: 'postgres',
//   password: 'postgres',
//   database: 'postgres',
//   host: 'my_db',
//   port: 5432,
//   dialect: 'postgres',
// });

// const sequelize = new Sequelize('postgres://postgres:postgres@my_db:5432/postgres');

// App
console.log('router')
app.use(router)

  // sequelize.authenticate()
  //   .then(data => {
  //     console.log('Connection has been established successfully.');
  //     console.log('data:', data)
  //     },
  //     (error) => {
  //       console.error('Unable to connect to the database:', error);
  //     }
  //   )

server.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});