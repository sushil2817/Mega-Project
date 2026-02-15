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

    var emailHtml = mailGenerator.generate(options.mailGenContent);
    var emailText = mailGenerator.generatePlaintext(options.mailGenContent);
    
    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST, /* "smtp.ethereal.email" */
        port: process.env.MAILTRAP_SMTP_PORT, /* 587 */
        secure: false, 
        auth: {
            user: process.env.MAILTRAP_USER /*"maddison53@ethereal.email"*/,
            pass: process.env.MAILTRAP_PASSWORD /*"jn7jnAPss4f63QBp6D"*/,
        },
    });

    const mail = {
        from: 'mail.taskmanager@hotmail.com',
        to: options.email,
        subject: options.subject,
        text: emailText, 
        html: emailHtml,
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email failed ", error)
    }
}

const emailVerificationMailGenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to App! We're very excited to have you on board.",
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

const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We go a request to reset your password",
            action: {
                instructions: 'To change your password click the button',
                button: {
                    color: '#22BC66',
                    text: 'Reset Password',
                    link: passwordResetUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}



