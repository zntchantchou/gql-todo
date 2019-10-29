import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {gql} from 'apollo-boost'; 
import {useQuery} from '@apollo/react-hooks';
import { TodoType } from './types/types';
import TodoList from './TodoList';
import {withNavigation} from 'react-navigation';

type Props = {
  tag: string, 
  todos: [TodoType]
}

const GET_TODOS = gql `
{
  todos{
    title
    isCompleted
    id
    tag{
      name
    }
  }
}`

function TodosByTag(props: any){  
  const {loading, error, data} = useQuery(GET_TODOS, {pollInterval: 500});
  const filteredTodos = data.todos.filter((todo: TodoType) => {  
    return todo.tag && (todo.tag.name === props.navigation.getParam('tag'))
  });
    return <TodoList todos={filteredTodos}/> 
}

TodosByTag.navigationOptions = (screenProps: any) => ({
  title: screenProps.navigation.getParam('tag'),
})

export default withNavigation(TodosByTag);