const app = require('./app');

const { port } = process.env;

app.listen(port, () => {
  // console.log('Started on port ', port);
});
