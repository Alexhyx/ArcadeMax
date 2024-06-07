// usersData.js
const users = [
  {
      id: 1,
      username: "peteranteater",
      password: "password1",
      userType: "regular",
      pronouns: "they/them",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profilePicture: "profile-picture.png",
  },
  {
      id: 2,
      username: "peter",
      password: "password2",
      userType: "admin",
      pronouns: "N/A",
      about: "N/A",
      profilePicture: "profile-picture2.jpg",
  },
  {
      id: 3,
      username: "round1",
      password: "password3",
      userType: "arcadeOwner",
      about: "Round 1 - Japanese Arcade Games",
      profilePicture: "round1-pfp.png",
      arcadeLocations: [
          {
              location_id: 1,
              name: "Round 1 @ Santa Ana",
              address: "2800 N Main St, Santa Ana, CA, US, 92705",
              games: ["Pump it Up", "Dance Dance Revolution", "Crane Games"],
          },
          {
              location_id: 2,
              name: "Round 1 @ Mission Viejo",
              address: "60C The Shops at Mission Viejo Mission Viejo, CA, US 92691",
              games: ["Pump it Up", "Dance Dance Revolution", "Crane Games"],
          }
      ],
  },
];

export default users;
