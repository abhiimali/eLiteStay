const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
    requests: [
      {
        guestName: {
          type: String,
          required: true,
        },
        checkInDate: {
          type: Date,
          required: true,
        },
        checkOutDate: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);


