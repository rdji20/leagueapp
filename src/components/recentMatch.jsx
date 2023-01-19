import React, { useEffect, useRef, useState, useContext } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Pressable,
    TouchableOpacity,
    Button,
    SafeAreaView,
} from "react-native";
import { DataTable } from "react-native-paper";
import Table from "./DataTable";
import DisplayUsers from "./LeagueUsers";
import LeagueStandings from "./RankingTable";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const RecentMatches = ({ navigation, userProp }) => {

    const UserInfo = ({player, score, side}) => {
        return (
            <View style={styles[side]} >
                <Text style={styles.h2}> {player}</Text>
                <Text style={styles.h3}> Portland</Text>
                <Text style={styles[side==='left' ? 'winner': 'loser']}> {score}</Text>
            </View>
        )
    }

    const PictureDisplay = ({url}) => {
        return (
            <View>
                <Image 
                    style={styles.itemPhoto} 
                    source={{
                        uri: url
                    }}
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <PictureDisplay url={SECTIONS[0].data[0].uri}></PictureDisplay>
                <UserInfo player={SECTIONS[0].data[0].display_name} score={'46'} side='left'/>
                <UserInfo player={SECTIONS[0].data[1].display_name} score={'40'} side='right'/>
                <PictureDisplay url={SECTIONS[0].data[1].uri}></PictureDisplay>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{

    },
    view: {
        flex: 1,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        borderWidth:0,
        paddingBottom:10,
        marginHorizontal: 25
    },
    h3: {
        color: "rgba(256,256,256,0.25)",
        fontSize: 14,
        fontWeight: "600",
        marginHorizontal: 10,
    },
    h2: {
        color: "rgba(256,256,256,1)",
        fontSize: "20",
        fontWeight: "600",
        marginBottom: 2,
        marginTop: 5,
        marginHorizontal: 10,
    },
    h1: {
        fontSize: 40,
        fontWeight: "800",
        color: "white",
        height: 40,
        margin: 10,
        padding: 0,
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
        padding: 15,
        color: "#DCDCDC",
        backgroundColor: "#DBFF00",
        borderRadius: "10px",
        alignItems: "center",
        width: 300,
    },
    buttonText: {
        fontWeight: "700",
    },
    buttonContainer: {
        alignItems: "center",
    },
    left:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'baseline',
        alignItems: 'baseline',
        marginBottom:100,
        paddingBottom:10
    },
    right:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'baseline',
        alignItems: 'flex-end',
        marginBottom:100,
    },
    itemPhoto: {
        width: 60, 
        height: 60, 
        borderRadius: 60/ 2,
        borderColor:'rgba(256, 256, 256, 0.5)',
        borderWidth:1
        
      },
    winner: {
        fontSize: 40,
        fontWeight: "800",
        color: "white",
        height: 40,
        margin: 10,
        padding: 0,
        shadowColor:'white',
        shadowOpacity:0.3,
        shadowRadius:14
    },
    loser: {
        fontSize: 40,
        fontWeight: "800",
        height: 40,
        margin: 10,
        padding: 0,
        color: 'rgba(256,256,256,0.2)'
    }
    
});

const SECTIONS = [
    {
      title: 'My Leagues',
      data: [
        {
          key: '1',
          display_name: 'Roberto',
          uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHRX8cZTM9RQw/profile-displayphoto-shrink_200_200/0/1611796969932?e=1674691200&v=beta&t=_z7G_Mzv9BeCVEmKw5c_owLyULXYNT0Y-OtGq3Fa8N0',
        },
        {
          key: '2',
          display_name: 'Octavia',
          uri: 'https://media.licdn.com/dms/image/C5603AQFsHOwly1yfKA/profile-displayphoto-shrink_800_800/0/1540257823299?e=1678924800&v=beta&t=tYXL893KTMmflebzL8lVI5j_yCZO-mUKc56FNgZ_83I',
        },
  
        {
          key: '3',
          display_name: 'Max',
          uri: 'https://media.licdn.com/dms/image/C5603AQFI24okpCiJRg/profile-displayphoto-shrink_800_800/0/1618847906137?e=1678924800&v=beta&t=I1ADXlyb_SBqHe3oywa2CJTYeSum591wVi9aEj1vvIA',
        },
        {
          key: '4',
          display_name: 'Weo',
          uri: 'https://pbs.twimg.com/profile_images/1420610977683419137/LlWNgDux_400x400.jpg',
        },
        {
          key: '5',
          display_name: 'Daniela',
          uri: 'https://i.pinimg.com/280x280_RS/06/32/6f/06326f6ac9f847c9528ce73cdffee0da.jpg',
        },
      ],
    }
  ];