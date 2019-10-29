import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {withNavigation} from "react-navigation";

type Props = {
  tag: {name: string},
  navigation: any
}
const Tag = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate('TodosByTag', {tag: props.tag.name})}}>  
      <View style={styles.tag}>
        <Text>{props.tag.name}</Text>
      </View> 
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
  tag: {
    height: 50, 
    width: '100%', 
    borderBottomColor: '#d9dadb', 
    borderBottomWidth: 0.8, 
    paddingLeft: 10,
    justifyContent: "center"
  }
})
export default withNavigation(Tag);