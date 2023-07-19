const mailer = require('nodemailer');

let  transport = mailer.createTransport({
    service: 'gmail',
    auth: {
        user:'contact.rijalsujan09@gmail.com',
        pass: 'your pass key'
    }
});

let  messageObject = {
    from:'contact.rijalsujan09@gmail.com',
    to:'rijalsujan09@gmail.com',
    subject:'Email using Node Mailer.',
    text:'This email send from nodejs.'
};

transport.sendMail( messageObject, ((error , info) =>{
    if(error){
        console.log(error);
        console.log("error Ocured.");
    }else{
        console.log("Email Sent");
        console.log(info.response);
    }

}));