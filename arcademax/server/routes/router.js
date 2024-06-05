const express = require("express");
const router = express.Router();


// Routing handles the HTTP,
// So this is what will be returned when you try to route to /users
router.get('/games', (req, res) => {
    //This should be fetched from a database, for now is in here
    const games = [
    {
      "name": "Pump It Up",
      "address": ["29033 Arroyo Drive, Irvine, CA", "2800 N Main St #1100, Santa Ana, CA"]
    },
    {
      "name":"DDR",
      "address":["4560 Oregon St, San Diego, CA"],
    },
    {
      "name":"DanceMania",
      "address":["260 Aldrich Hall Irvine, CA"]
    }
  ]
  res.send(games);
})

module.exports = router;