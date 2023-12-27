const express = require("express");
const app = express();
const port =process.env.PORT||3000;

app.use('/',require('./router/index'))

app.listen(port,()=>{
    console.log(`connection is made on  port ${port}`);
})