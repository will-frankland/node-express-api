import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

// All routes in here are already starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

// Used to create users
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the username ${user.firstName} added to the database`);
});

// Adding : allows anything to be put after the ID in the url
// example - /users/2 => would be stored in req.params
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from database`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userFound = users.find((user) => user.id === id);

  if(firstName) userFound.firstName = firstName;
  if(lastName) userFound.lastName = lastName;
  if(age) userFound.age = age;

  res.send(`User with the id ${id} has been updated`);

});

export default router;
