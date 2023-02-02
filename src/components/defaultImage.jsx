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


export const DefaultImage = ({displayName, color}) => {
    return (
      <View style={{backgroundColor: "transparent", display:'flex', justifyContent:'center', alignItems:'center', width: 55, height: 55, borderRadius:55, borderColor:color, borderWidth:1,}}>
        <Text style={{color:"white", fontSize:18, fontWeight:'600'}}>{displayName.split(' ').map(val => val.charAt(0).toUpperCase())}</Text>
      </View>
    )
  }

