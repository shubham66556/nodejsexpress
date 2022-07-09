const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
 const errorController = require('./controllers/error');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const ContactusRoutes= require('./routes/Contactus');
const successRoutes = require('./routes/success');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(ContactusRoutes);
app.use(successRoutes);
//   app.use('/succcess',successRoutes);

//  app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', 'success.html'));
// });

 
// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });




app.use(errorController.get404);


app.listen(7000);