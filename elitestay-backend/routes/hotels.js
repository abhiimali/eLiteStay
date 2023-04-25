const express = require("express");

const Hotel = require('../models/hotel')
const router = express.Router();

// CREATE

router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE

// DELETE

// GET
// GET All

module.exports = router;
