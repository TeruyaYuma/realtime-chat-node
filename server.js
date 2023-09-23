'use strict';
 
const express = require("express");
const app = express();

const pg = require("pg");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// PostgreSQL connect info
const pool = new pg.Pool({
  user: "postgres",
  host: "my_db",
  database: "postgres",
  password: "postgres",
  port: 5432
});

// App
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get("/members", (req, res) => {
  pool.connect((err, client) => {
    if (err) {
      res.send(err.stack);
    } else {
      const query = {
          text: "select * from members",
          values: [],
      };
      client.query(query, (error, response) => {
          if (error) {
              res.send(error.stack);
          } else {
              res.json(response.rows);
          }
      })
    }
  });
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});