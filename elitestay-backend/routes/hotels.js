const express = require("express");

const Hotel = require("../models/Hotel");
const e = require("express");
const { error } = require("console");
const router = express.Router();

const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} = require("../controllers/hotelController");

// CREATE hotel
router.post("/", createHotel);

// UPDATE hotel
router.put("/:id", updateHotel);

// DELETE hotel
router.delete("/:id", deleteHotel);

// GET hotel
router.get("/:id", getHotel);

// GET all hotels
router.get("/", getHotels);

module.exports = router;
