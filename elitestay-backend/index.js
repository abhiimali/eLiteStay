const mongoose = require('mongoose');
const express = require('express')
const app = express()
cookieParser = require('cookie-parser')
require('dotenv').config()

//  Database Connection Done Here  


mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


app.get('/', (req, res) => {
  res.json({message: "Backend Working Fine updated  "})
})

// middlewares are here 
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",require("./routes/auth"));
// app.use("/api/users",require("./routes/users"));
app.use("/api/rooms",require("./routes/rooms"));
app.use("/api/hotels",require("./routes/hotels"));

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


const PORT = process.env.PORT || 5001 
const HOST =  '0.0.0.0' 
app.listen(PORT,HOST ,() => {
  console.log(` eLiteStay Backend listening on port ${PORT}`)
});