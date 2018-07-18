const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json([{ status: "it works, admin api" }]);
});

// return all the properties for property cards screen
router.get("/properties", (req, res) => {
  res.status(200).json({ status: "returns all properties for cards" });
});

// **post, add a new property to database
router.get("/addproperty", (req, res) => {
  res.status(200).json({ status: "add a new property to database" });
});

// return all the work orders for cards screen
router.get("/workorder", (req, res) => {
  res.status(200).json({ status: "returns all work orders for cards" });
});

// **post, it adds a new tenant to the system
router.get("/addtenant", (req, res) => {
  res.status(200).json({ status: "add a new tenant to the system" });
});

// display the billing information
router.get("/billing", (req, res) => {
  res.status(200).json({ status: "returns billing information" });
});

// display admin settings
router.get("/settings", (req, res) => {
  res.status(200).json({ status: "display admin settings info" });
});

// **put, update setting in admin settings
router.get("/settingsupdate", (req, res) => {
  res.status(200).json({ status: "returns all properties for cards" });
});

module.exports = router;
