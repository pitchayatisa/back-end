const mongoose = require('mongoose')
const Schema = mongoose.Schema
const projectSchema = new Schema(
  {
    todo: String,
  },
  { timestamps: true, versionKey: false }
)
const ProjectModel = mongoose.model('todo-list', projectSchema)
module.exports = ProjectModel