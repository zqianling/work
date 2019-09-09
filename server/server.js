/*
 * @Descripttion:
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-09-04 09:55:53
 * @copyright: Copyright (c) 2019,Hand
 */
//引入模块，
const express = require("express");
//引入mongoose库
const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/blog";
const bodyparser=require("body-parser");
mongoose.connect(DB_URL);
mongoose.connection.on("open", function() {
    console.log("链接成功");
});
//定义文档模型，类似于数据库建表
const User = mongoose.model(
    "userName",
    new mongoose.Schema({
        title: { type: String, require: true },
        body: { type: Number, require: true }
    })
);
//新增数据
User.create(
    {
        title: "喵星人",
        body: 19
    },
    function(err, doc) {
        if (!err) {
            console.log(doc);
        } else {
            console.log(err);
        }
    }
);
//删除数据
User.remove({ age: 20 }, function(err, doc) {
    console.log(doc);
});
//修改数据
User.update({ name: "功夫熊猫1" }, { $set: { age: 28 } }, function(err, doc) {
    console.log(doc);
});
//新建app
const app = express();
//body-parser为中间件，方便获取post操作数据，需要先使用一下。
app.use(bodyparser.urlencoded({extended:false}));
//请求数据
app.get("/", function(req, res) {
    res.send("<h1>hello world</h1>");
});
app.post("/dataName.html", function(req, res) {
    res.send("niao1")
});
app.get("/dataName.html", function(req, res) {
    res.send("niao1")
});
app.get("/home.html", function(req, res) {
  console.log(req.query);
});
//返回json类型数据
app.get("/data", function(req, res) {
    User.find({}, function(err, doc) {
        res.json(doc);
    });
});

//监听8100端口
app.listen("8100", function() {
    console.log("8100");
});
