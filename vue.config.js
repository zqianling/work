/*
 * @Descripttion: 
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-09-01 20:01:50
 * @copyright: Copyright (c) 2019,Hand
 */
module.exports={
  devServer: {
    port: 8080,
    proxy: {
        '/api': {
            target: 'http://localhost:8100',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': '/'
            }
        }
    },
  },
}
//后端提交数据配置
const express = require("express")
//引入mongoose库
const mongoose = require("mongoose")
const DB_URL = "mongodb://127.0.0.1:27017/blog"
const bodyparser=require("body-parser")
var multer  = require('multer')
mongoose.connect(DB_URL)
mongoose.connection.on("open", function() {
    console.log("链接成功");
})
//定义文档模型，类似于数据库建表
const User = mongoose.model(
    "userName",
    new mongoose.Schema({
        title:{ type: String, require: true },
        content:{ type:String, require: true },
        categarits:{type:Array},
        author:{type:String}
    })
)
//新增数据
// User.create(
//     {
//         title: "喵星人",
//         body: 19
//     },
//     function(err, doc) {
//         if (!err) {
//             console.log(doc);
//         } else {
//             console.log(err);
//         }
//     }
// )
//删除数据
// User.remove({ age: 20 }, function(err, doc) {
//     console.log(doc);
// })
//修改数据
// User.update({ name: "功夫熊猫1" }, { $set: { age: 28 } }, function(err, doc) {
//     console.log(doc);
// })
//新建app
const app = express();
//body-parser为中间件，方便获取post操作数据，需要先使用一下。
app.use(bodyparser.urlencoded({extended:false}))
//请求数据
app.get("/", function(req, res) {
    res.send("<h1>hello world</h1>");
})
app.post('/upData', function(req, res) {
    console.log("数据成功提交");
    User.create({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author,
        categarits:req.body.categarits
    },function(err,doc){
        if(!err){
            console.log(doc);
        }else{
            console.log(err);
        }
    });
    res.send("axios,发送数据，您好吗？")
})
app.get(`/upData`, function(req, res) {
  // console.log(req.body);
  console.log(req.query);
  res.send("axios,发送数据，您好吗？")
})
app.get("/home.html", function(req, res) {
  console.log(req.query);
})
//返回json类型数据
app.get("/data", function(req, res) {
    User.find({}, function(err, doc) {
        res.json(doc);
    });
})
//图片处理
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
var upload = multer({ storage: storage })
app.post('/profile', upload.single('avatar'), function (req, res) {
res.send("ok");
})
//监听8100端口
app.listen("8100", function() {
    console.log("8100");
})