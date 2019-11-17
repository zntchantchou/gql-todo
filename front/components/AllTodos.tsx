import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { Text } from 'react-native';
import TodoList from './TodoList';

const GET_TODOS = gql `
{
  todos{
    copain
    isCompleted
    id
    tag{
      name
    }
  }
}`

const AllTodos = () => {
  const {loading, error, data} = useQuery(GET_TODOS, {pollInterval: 500});
  if(error) return <Text>error...</Text>
  if(loading) return <Text>loading...</Text>
  return <TodoList todos={data.todos}/>
}

export default AllTodos;
