var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  var username = req.body.username
  if(username == "mafengshe"){
    res.json({ errno: 1, errmsg: "用户名已经存在", data: {} })
  }
  res.json({ errno: 0, errmsg: "", data: {} })
})

module.exports = router;