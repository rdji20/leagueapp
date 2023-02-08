import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export const DefaultImage = ({displayName, color, size}) => {
  let circleSize = 55
  let fontSize = 18
  let borderSize = 1
  
  if (size==='Large'){
    circleSize = 100
    fontSize = 30
    borderSize = 2
  }
  else if (size==='Small'){
    circleSize = 40
    fontSize = 12
    borderSize = 0.5
  }
  return (
    <View style={{backgroundColor: "transparent", display:'flex', justifyContent:'center', alignItems:'center', width: circleSize, height: circleSize, borderRadius:circleSize, borderColor:color, borderWidth:borderSize,}}>
      <Text style={{color:"white", fontSize, fontWeight:'600'}}>{displayName.split(' ').map(val => val.charAt(0).toUpperCase())}</Text>
    </View>
  )
  }

