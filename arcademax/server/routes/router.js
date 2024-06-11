const express = require("express");
const router = express.Router();

router.post('/games_output', (req, res) => {
  const {id, location_id, name, address, games} = req.body; //json data
  console.log(id + '|' + location_id + '|' + name +'|' + address + '|' + games)
  res.send('Message Sent. Thank You')
})


// Routing handles the HTTP,
// So this is what will be returned when you try to route to /users
router.get('/games', (req, res) => {
    //This should be fetched from a database, for now is in here
    const games = [
      {
          "id" : 3,
          "location_id": 1,
          "name": "Round 1 @ Santa Ana",
          "address": "2800 N Main St, Santa Ana, CA, US, 92705",
          "games": ["Pump it Up", "Dance Dance Revolution", "Crane Games"]
      },
      {
          "location_id": 2,
          "name": "Round 1 @ Mission Viejo",
          "address": "60C The Shops at Mission Viejo Mission Viejo, CA, US 92691",
          "games": ["Pump it Up", "Dance Dance Revolution", "Crane Games"]
      }
  ]
  res.send(games);
})

router.get('/users', (req, res) => {
    const users = [
      {
      "id": 3,
      "username": "round1",
      "userType": "arcadeOwner",
      "about": "Round 1 - Japanese Arcade Games",
      "profilePicture": "round1-pfp.png"
      },
      {
        "id": 2,
        "username": "peter",
        "userType": "admin",
        "pronouns": "N/A",
        "about": "N/A",
        "profilePicture": "profile-picture2.jpg"
    }
    ]
    res.send(users);
})

module.exports = router;