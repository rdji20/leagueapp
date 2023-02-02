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



export default function DisplayNewUsers({players, setAddingPlayer, displayName}) {

  const ListItem = ({ item, index}) => {
    return (
      <View style={styles.item}>
          <View>
            <DefaultImage displayName={item.displayName} color={index === players.length - 1 ? '#7f5af0' : 'white'}></DefaultImage>
          </View>
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
        marginLeft:20,
        marginBottom:15
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