const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: true}));




app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), function(err) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
});







let port = process.env.PORT;
if (port == null || port == "") {
  port = 7000;
}





app.listen(port, function() {
  console.log("Server started success");
  console.log(port);

  console.log( + "/public/index.html");

});
