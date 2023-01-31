import express from "express";

const router = express.Router();

const users = [
  {
    firstnName: "Joel",
    lastName: "Zimmerman",
    age: 42
  },
  {
    firstnName: "Lewis",
    lastName: "Hamilton",
    age: 38
  },
];

// All routes in here are already starting with /users
router.get('/', (req, res) => {
  console.log(users);
  res.send(users)
});

router.post('/', (req, res) => {
  console.log('Post route reached');

  res.send('Post route reached')
});

export default router;