var express = require('express');
var router = express.Router();
var http = require('http')
/* GET users listing. */
router.get('/', function(req, res, next) {

  http.get('http://59.110.226.77:3000/api/list/sell?cid=25',r => {
    let rawData = ''
    r.on('data',chunk => {
      rawData += chunk 
    })
    r.on('end',() => {
      console.log(JSON.parse(rawData))
      res.render('car',{
        title: '这里是购物车',
        person: {
          name: 'lakers'
        },
        str: 'I love You',
        flag: false,
        todos: [
          {
            id: 1,
            task: '敲代码'
          },
          {
            id: 2,
            task: '写作业'
          }
        ],
        list: JSON.parse(rawData).data.content
      })
    })
  })

  
});

module.exports = router;
