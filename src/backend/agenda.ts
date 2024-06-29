import { Agenda } from "@hokify/agenda"
import nodemailer from 'nodemailer'

const mongoConnectionString = "mongodb+srv://gaurisariag:gaurisariag@flow.d8iacaw.mongodb.net/"
const agenda = new Agenda({db: {address: mongoConnectionString}})



agenda.define('send email',  async ()=> {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{

        }


        
    });


    let mailOptions = {
        from: '"Test" <xxxx@gmail.com>', // sender address
        to: "gaurisariag@hmail.com", // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
        };

        transporter.sendMail(mailOptions);
  }); 

  await agenda.schedule('in one hour','send email')