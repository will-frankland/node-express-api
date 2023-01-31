import express from "express";

const router = express.Router();


// All routes in here are already starting with /users
router.get('/', (req, res) => {
  res.send('Hello World!');
});

export default router;