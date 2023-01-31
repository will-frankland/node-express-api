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
  res.send(users)
});

router.post('/', (req, res) => {
  const user = (req.body);

  users.push(user);

  res.send(`User with the username ${user.firstName} added to the database`);
});

export default router;