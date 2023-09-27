const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { query, validationResult, body } = require("express-validator");
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_Secret = "Hello world"

//Signup endpoint
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter valid Email").isEmail(),
    body("password", "Password must be six characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }

    //Checking Email already exists or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        res.status(400).json({ error: "sorry this email already exists" });
      }
      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password,salt)
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("something went wrong");
    }
  }
);

//Login endpoint
router.post(
  "/login",[
    body("email", "Enter valid Email").isEmail(),
    body("password", "Password cannot be empty").exists(),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }
    //Taking email and passowrd from body
    const {email,password} = req.body
    try {
      //Checking if user exists
      let user = await User.findOne({email})
      if(!user){
        res.status(400).json({error:"PLease enter correct credentials"})
      }
      //Comparing password
      const passCompare = await bcrypt.compare(password,user.password)
      if(!passCompare){
        res.status(400).json({error:"PLease enter correct credentials"})
      }

      //Sending auth token
      const payload = {
        user :{
          id:user.id
        }
      }
      const authToken = jwt.sign(payload,JWT_Secret)
      res.json({authToken})
    } catch (error) {
      
    }
  }
  )

  //Getting user details
  router.post(
    "/getuser",fetchuser,[
      body("email", "Enter valid Email").isEmail(),
      body("password", "Password cannot be empty").exists(),
    ],  async (req, res) => {
      try {
        
        const userId = req.user.id
        const user  = await User.findById(userId).select('-password')
        res.send(user)
      } catch (error) {
        console.log(error.message)
        res.status(500).send("INTERNAL server error")
      }
    }
  )
module.exports = router;
