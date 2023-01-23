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




const ListItem = ({ item }) => {
  return (
    <View style={styles.item} key={item.userId}>
        {item.picUri != ''? <Image 
        style={styles.itemPhoto} 
        source={{
            uri: item.picUri
        }}
        /> : <MaterialCommunityIcons name='account-circle' style={{color:'rgba(256, 256, 256, 0.5)', fontSize:65, marginBottom:0}}/>}
        <Text style={styles.itemText}>{item.displayName != '' && item.displayName != ' ' ? item.displayName.split(' ')[0] : 'User'}</Text>
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
          userId: '1',
          displayName: 'Roberto',
          picUri: 'https://media-exp1.licdn.com/dms/image/C5603AQHRX8cZTM9RQw/profile-displayphoto-shrink_200_200/0/1611796969932?e=1674691200&v=beta&t=_z7G_Mzv9BeCVEmKw5c_owLyULXYNT0Y-OtGq3Fa8N0',
        },
        {
          userId: '2',
          displayName: 'Octavia',
          picUri: 'https://media.licdn.com/dms/image/C5603AQFsHOwly1yfKA/profile-displayphoto-shrink_800_800/0/1540257823299?e=1678924800&v=beta&t=tYXL893KTMmflebzL8lVI5j_yCZO-mUKc56FNgZ_83I',
        },
  
        {
          userId: '3',
          displayName: 'Max',
          picUri: 'https://media.licdn.com/dms/image/C5603AQFI24okpCiJRg/profile-displayphoto-shrink_800_800/0/1618847906137?e=1678924800&v=beta&t=I1ADXlyb_SBqHe3oywa2CJTYeSum591wVi9aEj1vvIA',
        },
        {
          userId: '4',
          displayName: 'Weo',
          picUri: 'https://pbs.twimg.com/profile_images/1420610977683419137/LlWNgDux_400x400.jpg',
        },
        {
          userId: '5',
          displayName: 'Daniela',
          picUri: 'https://i.pinimg.com/280x280_RS/06/32/6f/06326f6ac9f847c9528ce73cdffee0da.jpg',
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
        justifyContent: 'flex-end',
        alignItems:'center',
        marginHorizontal: 8,
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
        borderRadius: 60/ 2,
        borderColor:'rgba(256, 256, 256, 1)',
        borderWidth:1,
        marginBottom:5

        
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
        marginTop:0,
      }
  });