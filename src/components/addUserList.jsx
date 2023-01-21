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




const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
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

const SECTIONS = [
    {
      title: 'My Leagues',
      data: [
        {
          key: '1',
          name: 'Roberto'
        },
        {
          key: '2',
          name: 'Octavia',
        },
  
        {
          key: '3',
          name: 'Max',
        },
        {
          key: '3',
          name: 'Max',
        },
        {
          key: '3',
          name: 'Max',
        },
      ],
    }
  ];
  
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
        alignItems: 'baseline',
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
        textAlign:'baseline',
        color: 'rgba(256, 256, 256, 0.5)',
        fontWeight:'700',
        marginTop: 8,
      },
      container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 8,
        paddingBottom: 25,
    }
    })