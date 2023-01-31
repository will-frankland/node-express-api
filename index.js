import express from "express";
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Hello World!');

  res.send("Hello from homepage");
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));