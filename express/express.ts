import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

    
const url = 'mongodb://localhost:2700';
const port = 8000;
const app = express();
const client = new MongoClient(url);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (_req, res) => {
  await client.connect();
  const result = await client
    .db('ngQuiz')
    .collection('Button')
    .find()
    .toArray()
  res.send(result);
  await client.close();
  console.log("w")
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
