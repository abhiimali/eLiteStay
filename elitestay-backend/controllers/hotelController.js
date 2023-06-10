const express = require("express");

const Hotel = require('../models/Hotel');


const createHotel = async (req,res) => {
    const newHotel = new Hotel(req.body);

    try {
      const saveHotel = await newHotel.save();
      res.status(200).json(saveHotel);
    } catch (error) {
      res.status(500).json(error);
    }

};

const updateHotel = async (req,res) =>{

    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id , { $set : req.body} ,{ new: true });
        res.status(200).json(updateHotel);
      } catch ( error) {
        res.status(404).json(error);
      }
}

const deleteHotel = async (req,res) =>{

    try {
        await Hotel.findByIdAndRemove(req.params.id);
        res.status(200).json({message: "Hotel Has Been Deleted"});
      } catch ( error) {
        res.status(404).json(error);
      }
    
}

const getHotel =  async (req,res) =>  {

    try {
        const data = await Hotel.findById(req.params.id);
        // console.log(" No Data ");
        res.status(200).json(data);
      }
      catch(error){
      res.status(400).json({message : "No Result Found"});
      }

};

const getHotels = async(req,res) => {

    try {
        const hotels =  await Hotel.find();
        // console.log(" No Data ");
        
        res.status(200).json(hotels);
      }
      catch(error){
      res.status(400).json({message : "No Result Found"});
      }

}
module.exports = { createHotel , updateHotel , deleteHotel , getHotel , getHotels}