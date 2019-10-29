import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';

const {height} = Dimensions.get('screen');

import Todo from './Todo';
import { TodoType } from './types/types';

type Props = {
  todos: [TodoType],
  navigation: any
}

const TodoList = (props: Props) => {
  const [todosCount, setTodosCount] = useState(props.todos.length);
  useEffect(() => console.log(todosCount), [todosCount])
  
  return (
    <View>
      <View> 
        {props.todos.map((todo: TodoType) => <Todo setCount={setTodosCount} todosCount={todosCount} key={todo.title} todo={todo}/>)}
      </View>
      
      <TouchableOpacity style={styles.addWrapper} onPress={() => props.navigation.navigate("MyModal")}>
        <View style={styles.addView}>
          <Image 
          source={require('../assets/add.png')}
          style={{width: 30, height: 30}}
          />
        </View>
      </TouchableOpacity>
    </View> 
    )
}

const styles = StyleSheet.create({
  addWrapper: {
    height: 45,
    width: "100%",
    backgroundColor: "green", 
    position: "absolute",
    top: height  - 165 ,
    bottom: 0,
    alignItems: "center",
    zIndex: 2
  },
  addView: {
    paddingTop: 10,
    width: 30,
    height: 30,
    justifyContent: "center",

  }
})

export default withNavigation(TodoList);