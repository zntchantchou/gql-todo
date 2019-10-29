import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {withNavigation} from 'react-navigation'; 
import Tag from './Tag';

const GET_TAGS = gql `
{
  tags{
    name
  }
}
`
type Tag = {
  name: string
} 

const Tags = (props: any) => {
  const {loading, error, data} = useQuery(GET_TAGS);
  if(error) return <Text> error ...</Text>
  if(loading) return <Text> loading ...</Text> 
  return (
    <View>
      {data.tags.map((tag: Tag) => <Tag tag={tag}/>)}
    </View>
  )
}

Tags.navigationOptions = (screenProps:any) => ({
  headerTitle: 'Tags'
})

export default withNavigation(Tags);