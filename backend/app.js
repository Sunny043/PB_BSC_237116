const express = require('express');
const bodyParser = require('body-parser');
const app= express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  var val1= req.body.value1;
  console.log(val1);
  var val2= req.body.value2;
  console.log(val2);
  var result = val1 + val2;
  console.log(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// app.get('/page1', (req, res) => {
// //   res.send('This is Page 1');
// // });

// // app.get('/role', (req, res) => {
// //   res.sendFile(__dirname + '/role.html');
// // });