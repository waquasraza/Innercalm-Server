const express = require('express');
const dotenv = require('dotenv');

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5050

app.get('/', (req,res)=>{
    res.status(200).json({success: true, message: 'Hello from InnerCalm Server.'})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})