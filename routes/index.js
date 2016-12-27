var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

router.get('/data', function(req, res) {
  MongoClient.connect(process.env.DB_URI, function (err, db) {
    if (err) { console.error(err) }
    db.collection('reports').find({}).toArray(function (err, reports) {
      res.send({reports})
      db.close()
    })
  })
})

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Weather Report' });
});

module.exports = router;
