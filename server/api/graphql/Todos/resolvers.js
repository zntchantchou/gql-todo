const Todo = require('../../models/Todo');

/* ---------------------- CREATE --------------------*/ 
async function createTodo(title){
  try{
    return await Todo.create({title})
  }catch(e){
    throw e;
  }
}

/* ---------------------- READ --------------------*/ 
async function getTodos(){
  try{
    return await Todo.find({})
    .populate({path: 'tag'}) 
  }catch(e){
    throw e
  }
}
/* ---------------------- UPDATE --------------------*/ 
async function updateTodo(id, updates){
  // console.log(updates);
  try{
    const updatedTodo = await Todo.findOneAndUpdate({_id: id}, updates);
    console.log(updatedTodo)
    return updatedTodo;
  }catch(e){
    throw e;
  }
}
/* ---------------------- DELETE --------------------*/ 
async function deleteTodo(id){
  try{
    const deletedTodo = await Todo.findByIdAndDelete(id); 
    console.log(deletedTodo);
    return deletedTodo;
  } catch {}
}

module.exports = {
  todos: () => getTodos(),
  createTodo : ({title}) => createTodo(title),
  updateTodo: ({id, updates}) => updateTodo(id, updates),
  deleteTodo: ({id}) => deleteTodo(id)
}