const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser')
const Notes = require("../models/Notes");
const { query, validationResult, body } = require("express-validator");


//Fetching Notes
router.get('/fetchnotes',fetchuser,async(req,res)=>{
    const notes = await Notes.find({user: req.user.id})
    res.json(notes)
})

//Adding notes
router.post('/addnotes',fetchuser,[
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Write valid description more than 6 lines").isLength({ min: 6 }),
],async(req,res)=>{
    const {title,description,tag} = req.body
    try {
        
   
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }
    const note = new Notes({
        title,description,tag,user:req.user.id
    })
    const savedNote = await note.save()
    res.json(savedNote)
} catch (error) {
    console.log(error.message)
    res.status(500).send("INTERNAL server error")
  }
})

//Updating notes
router.put('/updatenotes/:id',fetchuser,async(req,res)=>{
    const {title,description,tag} = req.body
    const newNote = {}
    if(title){newNote.title = title}
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}
    let note = await Notes.findById(req.params.id)
    if(!note){return res.status(404).send("Not found")}
    if(note.user.toString() !== req.user.id){
        return res.status(404).send("Not allowed")
    }
    note = await Notes.findByIdAndUpdate(req.params.id , {$set:newNote} , {new:true})
    res.json({note})
})


//Delete notes
router.delete('/deletenotes/:id',fetchuser,async(req,res)=>{
    const {title,description,tag} = req.body
    
    let note = await Notes.findById(req.params.id)
    if(!note){return res.status(404).send("Not found")}
    if(note.user.toString() !== req.user.id){
        return res.status(404).send("Not allowed")
    }
    note = await Notes.findByIdAndDelete(req.params.id )
    res.json({"Succes":"Note has been deleted" , note:note})
})
module.exports = router