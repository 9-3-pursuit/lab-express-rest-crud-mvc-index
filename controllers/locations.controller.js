const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");
console.log(locationsArray)
locations.get("/", (req, res) => {
  res.json(locationsArray);
});
locations.get("/:index",(req,res)=>{
    const { index } = req.params 
    res.json(locationsArray[index])
} )

module.exports = locations;