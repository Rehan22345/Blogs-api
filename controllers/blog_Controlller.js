const Blog = require("../model/blog.js");
const jwt = require("jsonwebtoken");
const mail = require("../service/mail.js")
module.exports.readBlog = async(req,res)=>{
const blogs = await Blog.find();
res.json({
    message : "Data fetched Sucessfully",
    data : blogs
})
}


module.exports.CreateBlog = async(req,res)=>{
    const { title , content , slug , meta_description , keywords , status , isPublished} = req.body;
    console.log( title , content , slug , meta_description , keywords , status , isPublished);
await Blog.create({
    title ,
    content ,
    slug ,
    meta_description ,
    keywords ,
    status : "done",
    isPublished : true
});
res.json({
    message : "Blog Created Sucessfully",
})
}

module.exports.UpdateBlog = async (req, res) => {
    const id = req.params.id;
    const updated_blog = await Blog.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      message: "Blog Updated Sucessfully",
      data: updated_blog,
    });
  };


  module.exports.DeleteBlog = async (req, res) => {
    const id = req.params.id;
    const updated_blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      message: "Blog Deleted Sucessfully",
      data: updated_blog,
    });
  };
  exports.SingleBlog = async(req,res)=>{
    const id = req.params.id;
    const blogs = await Blog.findById(id);
    res.json({
        message : "Data fetched Sucessfully",
        data : blogs
    })
  }


  module.exports.ForgetEmail = (req,res)=>{
const {email} = req.body;
let otpcode = "";
    for(let i=1;i<=6;i++){
const random_number = Math.floor(Math.random()*6);
otpcode+= random_number;
    }
const expiry = new Date.now() + 60*3*1000;
let updated_data = {
  expiry, otpcode
}
let update_blog = Blog.findOneAndUpdate({email},updated_data,{new : true});

if(update_blog){
  mail(email,otpcode);
  res.json({
    message : "Email sent Sucessfully"
  })
}else{
  res.json({
    message : "Eroor occured!!"
  })
}
}
module.exports.ResetPassword = (req,res)=>{
  
}