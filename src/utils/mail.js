import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Task Manager',
            link: 'https://mailgen.js/'
        },
    });
    // var emailBody = mailGenerator.generate(options);
    var emailText = mailGenerator.generatePlaintext(options.mailGenContent);
}

const emailVerificationMailGenContent = (username,verificationUrl)=>{
    return {
        body:{
            name:username,
            intro:"Welcome to App! We're very excited to have you on board.",
            action: {
            instructions: 'To get started with Mailgen, please click here:',
            button: {
                    color: '#22BC66', 
                    text: 'verifty your email',
                    link: verificationUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}