const { buildSchema } = require('graphql');
const TagTypes = require('../graphql/Tags/types');
const TodoTypes = require('../graphql/Todos/types');
const TagQueries = require('../graphql/Tags/resolvers');
const TodoQueries = require('../graphql/Todos/resolvers');
// Type QUERY obligatoire ! 

const queryTypes = `
type Query {
  tags: [Tag]
  todos: [Todo]
}

type Mutation {
  createTag(name: String!): Tag
  updateTag(id: String!, name: String!): Tag
  deleteTag(id: String!): Tag

  createTodo(title: String!): Todo
  updateTodo(id: String!, updates: TodoInput): Todo
  deleteTodo(id: String!): Todo
}
`
// assemblage de tous les types en un seul 'string'
exports.schema = buildSchema([...TagTypes, ...TodoTypes, queryTypes].join(' '));

// assemblage de tous les resolvers dans un seul objet
exports.rootQuery = { ...TagQueries, ...TodoQueries };