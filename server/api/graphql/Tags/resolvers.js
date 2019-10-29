const Tag = require('../../models/Tag');

/* ---------------------- CREATE --------------------*/ 
async function createTag(name){
  try{
    return await Tag.create({name}); 
  }catch(e){
    throw e
  }
}
/* ---------------------- READ --------------------*/ 

async function getTags(){
  try {
    const tags = await Tag.find({})
    console.log(tags); 
    return tags;
  }catch(e){
    throw e
  } 
}
/* ---------------------- UPDATE --------------------*/ 

async function updateTag(id, name){
  try{
    const updatedTag = await Tag.findOneAndUpdate({_id: id}, {name: name})
    console.log("updated tag: ", updatedTag);
    return updatedTag;
  }catch(e){
    throw e
  }
}
/* ---------------------- DELETE --------------------*/ 

async function deleteTag(id){
  try{
    const deletedTag = await Tag.findOneAndDelete({_id: id})
    return deletedTag;
  }catch(e){
    throw e    
  }
}

module.exports = {
  tags: () => getTags(),
  createTag: ({name}) => createTag(name),
  updateTag: ({id, name}) => updateTag(id, name),
  deleteTag: ({id}) => deleteTag(id)
}