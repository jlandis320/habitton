import mongoose from "mongoose"

const Schema = mongoose.Schema

const eventSchema = new Schema({
  type: Date,
},{
  timestamps: true
})


const habitSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId, 
    ref: "Profile",
  },
  habit: {
    type: String,
  },
  category: {
    type: String,
    enum: ["Health", "Work", "Relationship", "Fitness"]
  },
  event: [eventSchema]
}, {
  timestamps: true
})

const Habit = mongoose.model("Habit", habitSchema)

export {
  Habit
}