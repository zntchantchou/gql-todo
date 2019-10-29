const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
    unique: true
  }, 
  isCompleted: { 
    type: Boolean,
    default: false
  }, 
  tag: {type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}
})

module.exports = mongoose.model('Todo', TodoSchema);