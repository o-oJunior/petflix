const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const routerVideo = require('./routes/video');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/videos', routerVideo);

app.listen(3030, () => {
  console.log(`Servidor está disponivel`);
});
