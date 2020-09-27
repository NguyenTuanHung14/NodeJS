
const dotenv = require('dotenv');

dotenv.config({
    path:"./config/config.env"
})

const app = require('./app');
const port = process.env.PORT || 5000;
app.listen(port,()=>{
   console.log(`App is running on Port ${port}`);
})