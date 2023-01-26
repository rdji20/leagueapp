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
import { DefaultImage } from './defaultImage';




const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
        <DefaultImage displayName={item.displayName}></DefaultImage>
        <Text style={styles.itemText}>{item.displayName}</Text>
    </View>
  );
};

export default function DisplayNewUsers({players}) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={players}
        renderItem={({ item }) => <ListItem item={item} />}
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
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 18,
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
        fontWeight:'300',
        fontSize:10,
        verticalAlign:'center',
        marginTop:5
      },
      container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 8,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:150,
        width:300,
        marginBottom:5
    }
    })