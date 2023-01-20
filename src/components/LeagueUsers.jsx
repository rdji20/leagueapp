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
        <Image 
        style={styles.itemPhoto} 
        source={{
            uri: item.uri
        }}
        />
        <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
};

export default function DisplayUsers() {
  return (
    <View style={styles.container}>
      <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
          renderItem={({ item, section }) => {
            return null
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
          name: 'Roberto',
          uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHRX8cZTM9RQw/profile-displayphoto-shrink_200_200/0/1611796969932?e=1674691200&v=beta&t=_z7G_Mzv9BeCVEmKw5c_owLyULXYNT0Y-OtGq3Fa8N0',
        },
        {
          key: '2',
          name: 'Octavia',
          uri: 'https://media.licdn.com/dms/image/C5603AQFsHOwly1yfKA/profile-displayphoto-shrink_800_800/0/1540257823299?e=1678924800&v=beta&t=tYXL893KTMmflebzL8lVI5j_yCZO-mUKc56FNgZ_83I',
        },
  
        {
          key: '3',
          name: 'Max',
          uri: 'https://media.licdn.com/dms/image/C5603AQFI24okpCiJRg/profile-displayphoto-shrink_800_800/0/1618847906137?e=1678924800&v=beta&t=I1ADXlyb_SBqHe3oywa2CJTYeSum591wVi9aEj1vvIA',
        },
        {
          key: '4',
          name: 'Weo',
          uri: 'https://pbs.twimg.com/profile_images/1420610977683419137/LlWNgDux_400x400.jpg',
        },
        {
          key: '5',
          name: 'Daniela',
          uri: 'https://i.pinimg.com/280x280_RS/06/32/6f/06326f6ac9f847c9528ce73cdffee0da.jpg',
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
        marginHorizontal: 10,
        marginBottom:15,
        shadowColor:"black",
        shadowOpacity:0.8,
        shadowRadius:6,
        paddingTop:15
      },
      itemPhoto: {
        width: 60, 
        height: 60, 
        borderRadius: 60/ 2,
        borderColor:'rgba(256, 256, 256, 0.5)',
        borderWidth:1,

        
      },
      itemText: {
        textAlign:'center',
        color: 'rgba(256, 256, 256, 1)',
        fontWeight:'300',
        marginTop: 8,
        fontSize: 12
      },
      container: {
        backgroundColor: "transparent",
        marginTop:10
      }
  });