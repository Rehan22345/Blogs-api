const express = require('express')
const app = express()
const connect = require("./db/connect.js");
const { readBlog, CreateBlog, UpdateBlog, DeleteBlog, SingleBlog, ForgetEmail, ResetPassword } = require('./controllers/blog_Controlller.js');
app.use(express.json());
connect();



app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get("/getdata",readBlog);
app.get("/getdata/:id",SingleBlog);
app.post("/postblog",CreateBlog);
app.put("/updateblog/:id",UpdateBlog);
app.delete("/deleteblog/:id",DeleteBlog);
app.post("/forget",ForgetEmail);
app.post("/reset",ResetPassword);

app.listen(3000);