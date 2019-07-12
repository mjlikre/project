const express = require('express');
const router = express.Router();
const connection = require('../data/data.js');
const mail = require('../config/email')




router.post('/', (req, res) =>{

    newSubs = {
        name: req.body.name,
        email: req.body.email
    }
    connection.query("INSERT INTO email_list SET ?",
    {
        user_name: newSubs.name,
        user_email: newSubs.email
    }), 
    function(err){
        if (err) throw err;
        console.log('success');
    }
    
   
});

router.post('/mail', (req, res)=>{
    const email = req.body.email;
    const name = req.body.name;

    mail(email, name)
})

// router.get('/', (req,res)=>{
//     res.json(data);
// });
module.exports = router;