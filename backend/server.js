import express from 'express';
import cors from 'cors';
import mysql from 'mysql';


const app = express();
const port = 8081;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simply5',
});

app.listen(port, () => {
    console.log(`listening ${port}`);
});
