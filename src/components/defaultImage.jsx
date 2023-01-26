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


export const DefaultImage = ({displayName}) => {
    return (
      <View style={{backgroundColor: "rgba(256,256,256,0.1)", display:'flex', justifyContent:'center', alignItems:'center', width: 55, height: 55, borderRadius:55, borderColor:'#7f5af0', borderWidth:0.5}}>
        <Text style={{color:"white", fontSize:16, fontWeight:'400'}}>{displayName.split(' ').map(val => val.charAt(0).toUpperCase())}</Text>
      </View>
    )
  }