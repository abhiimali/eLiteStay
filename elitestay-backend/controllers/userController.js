const express = require("express");
const bcrypt = require('bcryptjs');

const User = require("../models/User");

const register = async (req, res, next) => {
  try {

    const  salt = bcrypt.genSaltSync(10); 
    const  hashpass = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashpass,
    });

    await newUser.save();
    res.status(200).json({ message: " User Created Successfully " });
  } catch (err) {
    res.status(400).json({message:"Error While Registering "});
  }
};

module.exports = { register };
