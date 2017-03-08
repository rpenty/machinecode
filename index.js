var express = require('express')
var fs = require('fs')
var jsonfile = require('jsonfile')
var app = express()

app.use(express.static('public'))

/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

var file = 'public/data.json'
var file2 = 'public/history.json'
var obj = genRGBJSON(500)
var obj2 = genRGBJSON(500)

function doMainStuff() {

 	obj = genRGBJSON(500)
  obj2 = genRGBJSON(500)

 	fs.truncate(file, 0, function() {
   	jsonfile.writeFile(file, obj, function (err) {
  		console.error(err)
  	})
  })

  fs.truncate(file2, 0, function() {
    jsonfile.writeFile(file2, obj2, function (err) {
      console.error(err)
    })
  })

  setTimeout(doMainStuff, 500);
}

function genRGBJSON(num) {
  var rgb = "[";

  var numColors = num;

  for (var i = 1; i <= numColors; i++) {
    rgb += "{ \"r\":" + genColorVal() + ", \"g\":" + genColorVal() + ", \"b\":" + genColorVal() + " }";
    if (i < numColors) { rgb += ","; }
  }

  rgb += "]";

  return JSON.parse(rgb);
}

function genColorVal() {
  return Math.round(Math.random() * 255);
}

//when your program starts, do stuff right away.
doMainStuff();

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})