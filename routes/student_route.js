const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = require("../models/student");
const requireLogin = require("../middleware/auth")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../keys");


router.post("/signup", (req, res) => {
    const {
        name,
        password, email, roll_no, branch, year, phone_no,isAdmin

    } = req.body;
    if (!roll_no || !password) {
        return res.status(422).json({ error: "please add all the fields" });
    }
    Student.findOne({ roll_no: roll_no })
        .then((savedUser) => {
            if (savedUser) {
                return res
                    .status(422)
                    .json({ error: "student already exists with that roll no" });
            }
            bcrypt.hash(password, 12).then((hashedpassword) => {
                const user = new Student({
                    name,
                    email, roll_no, branch, addmission_year: year, phone_no,
                    password: hashedpassword,isAdmin

                });

                user
                    .save()
                    .then((user) => {
                        res.json({ message: "saved successfully" });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post("/signin", (req, res) => {
    console.log(req.body)
    const { roll_no, password } = req.body;
    if (!roll_no || !password) {
        return res.status(422).json({ error: "please add roll_no amd password" });
    }
    Student.findOne({ roll_no: roll_no }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid roll_no or password" });
        }
        bcrypt
            .compare(password, savedUser.password)
            .then((doMatch) => {
                if (doMatch) {

                    const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);

                    res.json({
                        token,
                        user: savedUser
                    });
                } else {
                    return res.status(422).json({ error: "Invalid roll_no or password" });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });
});

router.get("/profile", requireLogin, (req, res) => {
  
    Student.find({ _id: req.user._id })
    .select("-password")
    .then((admins) => {
      res.json(admins);
    })
    .catch((err) => {
      console.log(err);
    });
    });

router.get("/allStudent", (req, res) => {
    console.log("okk")
    Student.find().sort({ createdAt: -1 }).then(data => {
        res.status(200).json(
           data
        );
    });
});

router.post("/removeStudent" , async(req,res)=>{


   
    try {
       await Student.findOneAndDelete({ _id: req.body.postId }) ;
      
       res.send("you successfully remove the student")

    } catch (error) {
       console.log(error);
    }

  
})
   


module.exports = router;