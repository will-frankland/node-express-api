import express from "express";
import { v4 as uuidv4 } from 'uuid';

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


// Used to create users
router.post('/', (req, res) => {
  const user = (req.body);

  users.push({...user, id: uudiv4() });

  res.send(`User with the username ${user.firstName} added to the database`);
});

export default router;