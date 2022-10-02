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

function newHabit(req, res){
  res.render("habits/new"),{
    title: "Make A Habit"
  }
}

export {
  index,
  newHabit as new
}