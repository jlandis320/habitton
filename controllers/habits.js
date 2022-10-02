import { Habit } from "../models/habit.js"

function index(req,res){
  Habit.find({})
  .then(habits => {
  res.render("habits/index", {
    habits: habits,
    title: "Your Habits"
  })
})
.catch(err => {
  console.log(err)
  res.redirect("/habits/index")
})
}

function create(req, res){
  
}

export {
  index
}