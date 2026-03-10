const express = require('express');
const { loggerMiddleware } = require('./middlewares/logger');
const bookRouter = require('./routes/book.routes');

const app = express();
const PORT = 8000;

app.use(loggerMiddleware);


app.use(express.json());

app.use('/books', bookRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});