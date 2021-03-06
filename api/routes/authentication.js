const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//Register
router.post("/register", async(req,res) =>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPw = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPw
        });

        const user = await newUser.save();
        res.status(200).json("Thank you. User has been created.")


    } catch (err) {
        res.status(500).json(err);
    }
});


//Login
router.post("/login", async (req,res) =>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Username incorrect!")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Password incorrect!")
    }catch (err) {
        res.status(500).json(err);

    }
})


module.exports = router