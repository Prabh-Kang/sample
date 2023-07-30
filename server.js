const express = require('express');
require('dotenv').config();

const app = express();

app.listen(process.env.SAMPLE_PROJECT_PORT, () => {
  console.log('Server is listening at PORT: ', process.env.SAMPLE_PROJECT_PORT)
})
