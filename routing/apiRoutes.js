const express = require('express');
const router = express.Router();
const data = require('../data/data');
const mail = require('../config/email')




router.post('/', (req, res) =>{

    newSubs = {
        name: req.body.name,
        email: req.body.email
    }
    data.push(newSubs);
    res.json(data);
    

   
});

router.post('/mail', (req, res)=>{
    const email = req.body.email;
    const name = req.body.name;

    mail(email, name)
})

router.get('/', (req,res)=>{
    res.json(data);
});
module.exports = router;