var express = require('express');
const router = express.Router();
const data = require('../data/data.js');

router.post('/', (req, res) =>{
    newSubs = {
        name: req.body.name,
        email: req.body.email
    }
    data.oush(newSubs);
    res.json(data);
    
  
    
});
router.get('/', (req,res)=>{
    res.json(data);
});
module.exports = router;