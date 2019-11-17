const Todo = `
#je peux faire référence aux autres types donnés au schéma (Tag)

type Todo {
  title: String
  isCompleted: Boolean, 
  tag: Tag 
  id: String
}`

const TodoInput = `
input TodoInput {
  title: String
  isCompleted: Boolean
  tag: String
}`

module.exports = [Todo, TodoInput];
