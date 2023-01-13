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
        <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
};

export default function DisplayNewUsers({players}) {
    players = [{data:[...players]}]
  return (
    <View style={styles.container}>
      <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={players}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
          renderItem={({ item, section }) => {
            return null;
            // return <ListItem item={item} />;
          }}
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
    })