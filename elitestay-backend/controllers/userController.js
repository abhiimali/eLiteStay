const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { createError } = require("../utils/error");
// import { createError } from "../utils/error.js";

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashpass = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashpass,
    });

    await newUser.save();
    res.status(200).json({ message: " User Created Successfully " });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, " User Does Not Found"));
    // console.log(user);

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, " Incorrect Password "));
    
    token = jwt.sign({id:user._id,isAdmin :user.isAdmin},process.env.SECRET_KEY);
    console.log(token)
    const { password, isAdmin, ...otherDetails } = user._doc;
    const userDetails = { ...otherDetails };
    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json(userDetails)
  } catch (err) {
    next(err);
  }
};
module.exports = { register, login };
