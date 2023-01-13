const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "prajinodeprojects@gmail.com", 
      pass: "hrynhaiousjguvwy"
    }
});

let details = {
    from:"prajinodeprojects@gmail.com",
    to:"praji22@gmail.com,syam varuvil@gmail.com",
    subject:"emailing using nodemailer",
    text:"tested"
};
transporter.sendMail(details,(err)=>{
    if (err) {
        console.log("error found",err)
    } else {
        console.log("Email successfully sent")
    }
});
