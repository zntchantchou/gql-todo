import ApolloClient, { gql } from 'apollo-boost';
import {AppRegistry} from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
})

const Application = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => Application);
