import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  console.log('oi', req.query);
  return res.json([
    { name: 'Lucas', age: 28 },
    { name: 'Maria', age: 25 },
    { name: 'Tomás', age: 29 },
  ]);
});

app.post('/users/:id', (req, res) => {
  console.log('oi', req.body);
  console.log('oi', req.params);
  return res.json([
    { name: 'Lucas', age: 28 },
    { name: 'Maria', age: 25 },
    { name: 'Tomás', age: 29 },
  ]);
});

app.listen(5000);
