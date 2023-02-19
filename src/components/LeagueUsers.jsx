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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { firstName } from '../utils/helperFunctions';

const DefaultImage = ({user, button=false}) => {
  return (
    button ?
    <View style={{...styles.defaultImg, backgroundColor:'white', borderColor:'white'}}>
      <Text style={{color:"black", fontSize:30, fontWeight:'700'}}><MaterialCommunityIcons style={{fontSize:24}}name='account-plus'/></Text>
    </View> :
    <View style={styles.defaultImg}>
      <Text style={{color:"white", fontSize:16, fontWeight:'500'}}>{user.split(' ').map(val => val.charAt(0).toUpperCase())}</Text>
    </View>
  )
}


const ListItem = ({ item, index, navigation}) => {
  const {button, ...navParams} = item.button ? item : {}
  return (//Add 
    item.button ? 
    <TouchableOpacity 
      style={styles.item} 
      key={item.userId}
      onPress ={() => 
        navigation.navigate("AddNewPlayer", navParams)
      }
    >
        <DefaultImage user={'+'} button={true}/>
        <Text numberOfLines={1} style={{...styles.itemText, fontWeight:'700'}}>Add</Text>
    </TouchableOpacity> :
    <TouchableOpacity style={styles.item} key={item.userId}>
        <DefaultImage user={item.displayName}/>
        <Text numberOfLines={1} style={styles.itemText}>{item.displayName != '' && item.displayName != ' ' ? firstName(item.displayName)  : 'User'}</Text>
    </TouchableOpacity>
  );
};

/**
 * Displays the users in a list
 * @param {*} param0 
 * @returns 
 */
export default function DisplayUsers({navigation, users}) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={users}
        renderItem={({ item, index}) => <ListItem navigation={navigation} item={item} index={index}/>}
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
        marginLeft: 13,
        marginBottom:15,
        shadowColor:"black",
        shadowOpacity:0.8,
        shadowRadius:6,
        paddingTop:15,
        width:60,
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
        marginBottom: 5,
        overflow:'hidden'
      },
      container: {
        backgroundColor: "transparent",
        marginTop:12,
        marginBottom:10,
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
      },
      defaultImg: {
        backgroundColor: "#242629",
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        width: 55, 
        height: 55, 
        borderRadius:55, 
        borderColor:'#7f5af0', 
        borderWidth:1,
        shadowColor:"black",
        shadowOpacity:1,
        shadowRadius:1,
        shadowOffset: {width: 3,height: 4}
      }
        
  });