const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "rehanpoudel2@gmail.com",  
        pass : "nvww vipa bxme mzxx"
    }
})
const sendMail = async(to) => {
    let optcode = "";
    for(let i=1;i<=6;i++){
const random_number = Math.floor(Math.random()*6);
optcode+= random_number;

    }
    let mailOptions = {
        from: "rehanpoudel2@gmail.com",     
        to: to,   
        subject: 'Forget Password', 
       text: `Your otp code is: ${optcode}`
    };
const mail = await transporter.sendMail(mailOptions);
    
};
module.exports = sendMail;