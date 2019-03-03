const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [req.body.feelings, req.body.understanding, req.body.support, req.body.comments])
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with feedback insert', error);
            res.sendStatus(500);
        });
});

app.get('/feedback', (req, res) => {
    pool.query('SELECT * FROM "feedback" ORDER BY "id" DESC;')
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('error with feedback select', error);
            res.sendStatus(500);
        });
});

app.delete('/feedback/:id', (req, res) => {
    pool.query(`DELETE FROM "feedback" WHERE "id"= $1;`, [req.params.id])
        .then(() => {
            res.sendStatus(204);
        }).catch((error) => {
            console.log('error with feedback delete query', error);
            res.sendStatus(500);
        });
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});