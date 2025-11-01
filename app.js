const express =  require('express');
const app = express();

app.use(express.json());

const route = require('./api/route/conflictRoute')
app.use('/api', route);

const port = 3000;
app.listen(port, () => console.log(`Api running on Port ${port}`));

module.exports = app;