const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routerVideo = require('./routes/video');

app.use(bodyParser.json());

app.use('/api/videos', routerVideo);

app.listen(3030, () => {
  console.log(`Servidor está disponivel`);
});
