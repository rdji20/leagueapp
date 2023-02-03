import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { DefaultImage } from './defaultImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { firstName } from '../utils/helperFunctions';
import uuid from 'react-uuid'


export default function DisplayNewUsers({players, setAddingPlayer, displayName, handleDeletePlayer}) {

  const ListItem = ({ item, index}) => {
    console.log(item)
    return (
      <View style={styles.item}>
          <TouchableOpacity  style={{position:'absolute',bottom:38, left:25,margin:10, zIndex:10}} onPress={() => {
            handleDeletePlayer(item.userId)
            console.log('sono')
            }}>
            <Text><MaterialCommunityIcons name='close-circle'style={{color:'#94a1b2', fontSize:25, }}></MaterialCommunityIcons></Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'black', width:15, height:15, borderRadius:10, position:'absolute', zIndex:9, bottom:50,left:39}}/>
          <TouchableOpacity >
            <DefaultImage displayName={item.displayName} color='#fffffe'></DefaultImage>
          </TouchableOpacity>
          <Text style={styles.itemText}>{firstName(item.displayName)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <FlatList
        horizontal
        data={players}
        renderItem={({ item, index}) => <ListItem item={item} index={index}/>}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
      sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#f4f4f4',
        marginBottom: 2,
      },
      item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:18,
        marginBottom:15,
      },
      itemPhoto: {
        width: 60, 
        height: 60, 
        borderRadius: 60/ 2,
        borderColor:'rgba(256, 256, 256, 0.5)',
        borderWidth:1
        
      },
      itemText: {
        color: 'rgba(256, 256, 256, 1)',
        fontWeight:'400',
        fontSize:10,
        verticalAlign:'center',
        marginTop:5
      },
      container: {
        borderRadius: 8,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:100,
        width:'100%',
    }
    })