const express = require("express");
const router = express.Router();

const Book = require("../models/book");
const Issue = require("../models/issue");





router.post("/addBook", async (req, res) => {

   const { title,author,publisher,year,copies } = req.body ;
     console.log("req.body",req.body)
    if(req.body._id){
        const obj = await Issue.find({_id:req.body._id})
        obj[0].isRecom = false 
        await obj[0].save()
    }
    const book = await new Book({ title,author,publisher,year,copies})
    await book.save()

    // const book = new Book({
    //     title,author,publisher,year,copies
    // })
    // book.save().then(result => {
    //     res.status(201).json({
    //         message: "Done upload!",
            
    //     })
    // }).catch(err => {
    //     console.log(err),
    //         res.status(500).json({
    //             error: err
    //         });
    // })
 
})
router.get("/allBook", (req, res) => {
    Book.find().sort({ createdAt: -1 }).then(data => {
        res.status(200).json(
           data
        );
    });
});
   



module.exports = router;