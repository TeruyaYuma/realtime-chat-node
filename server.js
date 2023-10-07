'use strict';
 
import express  from 'express'
import router from "./app/src/interface/router/index.js"
const app = express();

// const pg = require("pg");
// const { Sequelize } = require('sequelize');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// PostgreSQL connect info
// const pool = new pg.Pool({
//   user: "postgres",
//   host: "my_db",
//   database: "postgres",
//   password: "postgres",
//   port: 5432
// });

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
app.use('/', router)

// app.get("/members", (req, res) => {
//   pool.connect((err, client) => {
//     if (err) {
//       res.send(err.stack);
//     } else {
//       const query = {
//           text: "select * from members",
//           values: [],
//       };
//       client.query(query, (error, response) => {
//           if (error) {
//               res.send(error.stack);
//           } else {
//               res.json(response.rows);
//           }
//       })
//     }
//   });
// })

  // sequelize.authenticate()
  //   .then(data => {
  //     console.log('Connection has been established successfully.');
  //     console.log('data:', data)
  //     },
  //     (error) => {
  //       console.error('Unable to connect to the database:', error);
  //     }
  //   )

 

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});