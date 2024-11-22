const express = require('express');
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.use(userRouter);
app.use(productRouter);

app.listen(PORT, () => {
  console.log(`Running on port : ${PORT}`);
});
