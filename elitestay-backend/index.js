const mongoose = require('mongoose');
const express = require('express')
const app = express()

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
  res.json({message: "Backend Working As Expected "})
})

// middlewares are here 

app.use("/auth",require("./routes/auth"));
app.use("/users",require("./routes/users"));
app.use("/rooms",require("./routes/rooms"));
app.use("/hotels",require("./routes/hotels"));


const PORT = process.env.PORT || 5001 

app.listen(PORT, () => {
  console.log(` eLiteStay Backend listening on port ${PORT}`)
})