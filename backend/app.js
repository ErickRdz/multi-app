const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 4001;

app.get('/hello', (req, res, next) => {
  //const greeting = {"greeting" : "Hi!!!"};

  res.json({message: "Hi Moroleon!"});
  console.log("Hello");
});

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});
