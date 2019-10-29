import React, {useState} from 'react';
import {Text, Button, View, TextInput} from "react-native";
import {gql} from 'apollo-boost';
import {useMutation} from "@apollo/react-hooks";
// import {withNavigation} from "react-navigation";

const CREATE_TODO = gql `
  mutation($title: String!){
    createTodo(title: $title){
      title
    }
  }
` 
function NewTodoModal(props: any) {
  const [value, setValue] = useState('');
  const [createTodo, {loading, error}] = useMutation(CREATE_TODO, {variables: {"title": value }})
  
    return (
      <View style={{ height: '50%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>Nouveau todo : </Text>
          <TextInput 
          style={{fontSize: 22 }}
            autoFocus
            placeholder="Aller aux champignons"
            defaultValue=""
            textAlign={"center"}
            onChangeText={text => setValue(text)}
            onSubmitEditing={() => {
              createTodo();
              props.navigation.goBack();
            }}
          /> 
      </View>
    );
}

export default NewTodoModal;