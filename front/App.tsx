import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tags from './components/Tags';
import AllTodos from './components/AllTodos';
import TodosByTag from './components/TodosByTag';
import NewTodoModal from './components/NewTodoModal';

type Props = {}
const dimensions = Dimensions.get('screen');

function App(props: Props){
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
       <View> 
        <AllTodos/>
      </View> 
      </SafeAreaView>
    </>
  );
};

App.navigationOptions = (screenProps:any) => ({
  title: 'Todo List',
  headerRight: () => (
    <TouchableOpacity onPress={() => screenProps.navigation.navigate('Tags')} style={styles.tagsButton}>
      <Image 
      source={require('./assets/ptag.png')}
      style={{width: 25, height: 25}}
      />
    </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    height: dimensions.height,
    width: dimensions.width,
    backgroundColor: "#fff"
  },
  tagsButton: {
    marginRight: 10,
    justifyContent: "center", 
    alignItems: "center",
    height: "70%"
  }
})

const AppNavigator = createStackNavigator({
  Home: App, 
  Tags: Tags,
  TodosByTag: TodosByTag 
},
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: { 
      backgroundColor: "green"
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerTintColor: '#fff'
  }
})


const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    MyModal: {
      screen: NewTodoModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
export default createAppContainer(RootStack);
