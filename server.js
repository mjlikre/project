const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/subs', require('./routing/apiRoutes')) ;


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on ${PORT}`));