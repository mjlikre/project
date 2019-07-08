const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

const newUserEmail = function (email, name){
    const message = { 
        to : email, //email variable
        from : { email : 'mjlikre@gmail.com' , name: 'DarDen'},
        message : `Hi there, ${name}`,
        subject : "Welcome onboard, we'll notify you when the app is ready",
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    }
    sgMail.send(message).then(sent => {
        console.log(sent);
    }).catch(e => {
        console.log("-----",e,"------");
        console.log(e.response.body.errors);
    });
}
module.exports = newUserEmail;