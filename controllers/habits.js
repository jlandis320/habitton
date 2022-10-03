import { Habit } from "../models/habit.js"

function index(req,res){
  Habit.find({})
  .then(habits => {
  res.render("habits/", {
    habits: habits,
    title: "Your Habits"
  })
})
.catch(err => {
  console.log(err)
  res.redirect("/habits/")
})
}

function newHabit(req, res){
  res.render("habits/new",{
    title: "Make A Habit"
  })
}

function create(req, res) {
  Habit.create(req.body)
  .then(habit => {
    console.log(habit)
    res.redirect("/habits/")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/habits/new")
  })
}

export {
  index,
  newHabit as new,
  create
}