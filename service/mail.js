const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "rehanpoudel2@gmail.com",  
        pass : "nvww vipa bxme mzxx"
    }
});
const sendMail = async(to,otpcode) => {
    let mailOptions = {
        from: "rehanpoudel2@gmail.com",     
        to: to,   
        subject: 'Forget Password', 
       text: `Your otp code is: ${otpcode}`
    };
const mail = await transporter.sendMail(mailOptions);
};
module.exports = sendMail;