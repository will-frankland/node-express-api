import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the username ${user.firstName} added to the database`);
};

export const getUser = (req, res) => {
  res.send(users);
};

export const getUserbyId = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from database`);
};

export const editUserDetails = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userFound = users.find((user) => user.id === id);

  if (firstName) userFound.firstName = firstName;
  if (lastName) userFound.lastName = lastName;
  if (age) userFound.age = age;

  res.send(`User with the id ${id} has been updated`);
};