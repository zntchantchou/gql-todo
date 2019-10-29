const express = require('express'); 
const graphqlHTTP = require('express-graphql');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const Tag = require('./api/models/Tag');
const {schema, rootQuery} = require('./api/graphql/schema');

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true});

app.use('/graphql', graphqlHTTP({
  schema: schema, 
  rootValue: rootQuery, 
  graphiql: true
}))

app.listen(PORT, () => console.log(`Le serveur todo tourne sur le port ${PORT}`));