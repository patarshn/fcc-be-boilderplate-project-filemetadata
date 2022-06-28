var express = require('express');
var cors = require('cors');
var multer = require('multer')
var upload = multer({dest : 'public'})

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single("upfile"), function (req, res) {
  // console.log(req.file)
  let file = req.file
  resp = {
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  }
  return res.json(resp)
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
