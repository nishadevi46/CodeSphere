const express = require("express");
const app = express();
const port =process.env.PORT||3000;

app.use('/',require('./router'))
app.set('view engine','ejs')
app.set('views','./views')
app.listen(port,()=>{
    console.log(`connection is made on  port ${port}`);
}) 