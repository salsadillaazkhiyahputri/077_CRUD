const express = require('express');
let mysql = require('mysql2');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is runing on http://localhost:${PORT}`);
})

const db mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Azkhiyah903#',
    database: 'mahasiswa',
    port: 3308
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connection Successfully');
});



