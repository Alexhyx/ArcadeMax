const express = require('express');
const router = express.Router();


router.post('/games_output', (req, res) => {
    const {id, location_id, name, address, games} = req.body; //json data
    console.log(id + '|' + location_id + '|' + name +'|' + address + '|' + games)
    res.send('Message Sent. Thank You')
  })
  
  
  router.get('/games', (req, res) => {
    //Stubbed data instead of database
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
  
    /*
    const sqlQuery = "SELECT * FROM games";
    db.query(sqlQuery, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
    */
  })
  
  router.get('/users', (req, res) => {
    //Stubbed data instead of database
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
      
      /*
      const sqlQuery = "SELECT * FROM users";
        db.query(sqlQuery, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
    */

  })

module.exports = router;