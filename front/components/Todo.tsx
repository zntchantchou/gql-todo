import React, { useState, useEffect } from 'react';
import  {gql} from 'apollo-boost';
import {useMutation} from "@apollo/react-hooks";
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, TextInput} from 'react-native';
import {TodoType} from './types/types';
import Controls from './TodoControls';

type Props = {
  todo: TodoType,
  setCount: any,
  todosCount: number
}

const UPDATE_TODO = gql `
  mutation($id: String!, $title: String!){
    updateTodo(id: $id, updates: {title: $title}){
      title
    }
  }`

const Todo = (props: Props) => {
  const [ isEditable, toggleIsEditable] = useState(false);
  const [ value, setValue ] = useState(props.todo.title)
  const [updateTodo, {loading, error}] = useMutation(UPDATE_TODO, {variables: {"id": props.todo.id, title: value}});

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.todo} onPress={() => toggleIsEditable(!isEditable)}>
          { isEditable ? 
          <TextInput
            style={{ width: "85%", height: '100%', borderColor: '#fff', borderWidth: 0 }}
            onChangeText={text => setValue(text)}
            onSubmitEditing={e => updateTodo()}
            defaultValue={props.todo.title}
            autoFocus
            placeholder={props.todo.title}/> 
              : 
          <Text style={{width: "85%"}}> {props.todo.title}</Text>}
          <Controls todo={props.todo} todosCount={props.todosCount} setCount={props.setCount}/> 
      </TouchableOpacity>
    </View>
  )
}

/* ---------------------- STYLE --------------------*/ 

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    width: width, 
    borderBottomColor: '#d9dadb', 
    borderBottomWidth: 0.8, 
    paddingLeft: 10,
    paddingTop: 5,
    height: '100%',
    },
  row: {
    flexDirection: "row",
    width: width, 
    height: 50
  }
})
export default Todo;