var express = require('express');
var path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


// require('./routing/htmlRoutes.js')(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`server started on ${PORT}`));