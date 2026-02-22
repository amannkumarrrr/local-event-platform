const express = require("express");
const router = express.Router();
const { getEvents, createEvent } = require("../controllers/eventController");

// GET all events
router.get("/", getEvents);

// POST new event
router.post("/", createEvent);

module.exports = router;
