import { Habit } from "../models/habit.js"

function index(req,res){
  Habit.find({ owner: req.user.profile._id })
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
  req.body.owner = req.user.profile._id
  Habit.create(req.body)
  .then(habit => {
    res.redirect("/habits/")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/habits/new")
  })
}

function show(req, res){
  Habit.findById(req.params.id)
  .then(habit => {
    const dateCreated = new Set(habit.event.map(e => {
      return e.createdAt.toLocaleString().slice(0 , 9) 
    }))
    res.render("habits/show", {
    title: "Track Your Habit",
    habit: habit,
    dateCreated
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/habits/show")
  })
}

function edit(req, res){
  Habit.findById(req.params.id)
  .then(habit => {
    res.render("habits/edit", {
      habit: habit,
      title: `Edit "${habit.habit}"`
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/habits/edit")
  })
}

function update(req, res){
  Habit.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(habit => {
    res.redirect(`/habits/${habit._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/habits/edit")
  })
}

function deleteHabit(req, res){
  Habit.findByIdAndDelete(req.params.id)
  .then(habit => {
    res.redirect("/habits")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/habits/show")
  })
}

function addEvent(req, res){
  Habit.findById(req.params.id)
  .then(habit => {
    // if event.createdAt.toLocaleString() === 
    habit.event.push(req.body)
    habit.save() 
    .then(() => {
      // const dateCreated = new Set(habit.event.map(e => {
      //   return event.createdAt.toLocaleString().slice(0 , 9) 
      // }))
      res.redirect(`/habits/${habit._id}`)
    })
    .catch(err => {
    console.log(err)
    res.redirect("/habits/")
    })
  })
}

export {
  index,
  newHabit as new,
  create,
  show,
  edit,
  update,
  deleteHabit as delete,
  addEvent
}