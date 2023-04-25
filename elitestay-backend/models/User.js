import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({

  name : String ,
  email : String ,
  phone_number : Number ,

});