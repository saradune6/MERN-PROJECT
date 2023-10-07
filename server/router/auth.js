//using Async-Await--------------------------

//                               registration code----------------

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`hello World from the server`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  //validation
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ msg: "Please enter all fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ err: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ err: "Password not match" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      //secure password-hash password in userSchema file
      await user.save();

      res.status(201).json({ msg: "User registered successfully" });
    }
  } catch (err) {
    console.log("error", err);
  }
});

//                                        login code-----------------


router.post("/signin", async (req, res) => {
  try {
    let token;

    const { email, password } = req.body;

    if (!email || !password) {
                       //check empty or not
      return res.status(400).json({ error: "please fill in all details" });
    }
    const userLogin = await User.findOne({ email: email });


                    //  macthing email and password ;

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
                     //  jwt token applying
      token = await userLogin.generateAuthToken();
     

      res.cookie("jwtoken", token,{
        expires:new Date(Date.now() + 25892000000),
        httpOnly: true
      });


      if (!isMatch) {
        res.status(400).json({ err: "Invalid credentials" });
      } else {
        res.json({ msg: "User Signin Successfully" });
      }
    } else {
      return res.status(500).json({ message: "wrong credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/about', authenticate , (req, res) => {
  console.log("hy my about");
  res.send(req.rootUser);
});
module.exports = router;
































// using promises

// const express = require("express");
// const router = express.Router();

// require("../db/conn");
// const User = require("../model/userSchema");

// router.get("/", (req, res) => {
//   res.send(`hello World from the server`);
// });

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   //validation
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ msg: "Please enter all fields" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ err: "Email already exist" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ msg: "User Registered Successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ err: "Failed Register" });
//         });
//     })
//     .catch((err) => {
//       console.log("error", err);
//     });
// });

// module.exports = router;
