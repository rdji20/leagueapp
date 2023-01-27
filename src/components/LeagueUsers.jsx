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

const DefaultImage = ({user}) => {
  return (
    <View style={{backgroundColor: "rgba(256,256,256,0.1)", display:'flex', justifyContent:'center', alignItems:'center', width: 55, height: 55, borderRadius:55, borderColor:'rgba(256, 256, 256, 1)', borderWidth:0.5}}>
      <Text style={{color:"white", fontSize:16, fontWeight:'400'}}>{user.split(' ').map(val => val.charAt(0).toUpperCase())}</Text>
    </View>
  )
}


const ListItem = ({ item, index}) => {
  let place = 'itemText'
  if (index === 0){
    place = 'gold'
  }
  if (index === 1){
    place = 'rgba(256, 256, 256, 0.5)'
  }
  if (index === 2){
    place = 'rgba(256, 256, 256, 0.5)'
  }
  return (
    <View style={styles.item} key={item.userId}>
        {item.picUri != ''? <Image 
        style={styles.itemPhoto} 
        source={{
            uri: item.picUri
        }}
        /> : <DefaultImage user={item.displayName}/>}
        <Text style={styles.itemText}>{item.displayName != '' && item.displayName != ' ' ? item.displayName.split(' ')[0] : 'User'}</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
        {index === -1 ? <MaterialCommunityIcons name={'trophy'} style={{color:place, fontSize:25, zIndex:'1'}}></MaterialCommunityIcons>: ''}
{/*         {index < 3 ? <MaterialCommunityIcons name={'trophy'} style={{color:place, fontSize:15, zIndex:'0'}}></MaterialCommunityIcons>: ''} */}
        </View>
    </View>
  );
};

/**
 * Displays the users in a list
 * @param {*} param0 
 * @returns 
 */
export default function DisplayUsers({users}) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={users}
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
        marginTop: 20,
        marginBottom: 2,
      },
      item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        marginHorizontal: 7,
        marginBottom:15,
        shadowColor:"black",
        shadowOpacity:0.8,
        shadowRadius:6,
        paddingTop:15,
        width:60
      },
      itemPhoto: {
        width: 55, 
        height: 55, 
        borderRadius: 55/ 2,
        borderColor:'rgba(256, 256, 256, 1)',
        borderWidth:0.5,

      },
      itemText: {
        textAlign:'center',
        color: 'rgba(256, 256, 256, 1)',
        fontWeight:'400',
        marginTop: 8,
        fontSize: 12,
        marginBottom: 5
      },
      container: {
        backgroundColor: "transparent",
        marginTop:0,
      },
      first:{
        textAlign:'center',
        color: 'white',
        fontWeight:'500',
        marginTop: 8,
        fontSize: 12,
        shadowColor:"gold",
        shadowOpacity:0.5,
        shadowRadius:5,
      },
      second:{
        textAlign:'center',
        color: 'white',
        fontWeight:'500',
        marginTop: 8,
        fontSize: 12,
        shadowColor:"grey",
        shadowOpacity:0.8,
        shadowRadius:6,
      },
      third:{
        textAlign:'center',
        color: 'white',
        fontWeight:'500',
        marginTop: 8,
        fontSize: 12,
        shadowColor:"#CD7F32",
        shadowOpacity:0.8,
        shadowRadius:6,
      }
  });