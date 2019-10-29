import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {gql} from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { TodoType } from './types/types';

type Props = {
  todo: TodoType,
  setCount: any,
  todosCount: number
}

const DELETE_TODO = gql `
  mutation($id: String!){
    deleteTodo(id: $id){
      title
    }
  }
`
const TodoControls = (props: Props) => {
  const [deleteTodo, {loading, error}] = useMutation(DELETE_TODO, {variables : {"id": props.todo.id}});
  const {setCount, todosCount} = props;
  return (
    <TouchableOpacity style={styles.controls} onPress={() => {
      deleteTodo()
      setCount(todosCount - 1);
    }}>
      <Image 
        source={require('../assets/delete.png')}
        style={{width: 25, height: 25}}
      />
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  controls: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems:"center"
  }
})

export default TodoControls;