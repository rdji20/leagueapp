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

export const RecentMatches = ({ navigation, userProp , uris, teams, players, score}) => {

    /**
     * Displays UserInfo. If the info to be displayed belongs to the winner, the a prop containing left will be passed so that 
     * the pertinent styling is used. 
     * @param player -  Player name string
     * @param score -  Score 
     * @param side -  
     * @param team -  Team played with
     * @returns 
     */
    const UserInfo = ({side}) => {
        return (
            <View style={styles[side]} >
                <Text style={styles.h2}> {side==='left' ? players[0]: players[1]}</Text>
                <Text style={styles.h3}> {side==='left' ? teams[0]: teams[1]}</Text>
                <Text style={styles[side==='left' ? 'winner': 'loser']} > {side==='left' ? score[0]: score[1]}</Text>
            </View>
        )
    }
    /**
     * Displays the players picture.
     * @param url - Picture uri string 
     * @returns <Image/> - Image component
     */
    const PictureDisplay = ({url}) => {
        return (
            <View style={styles.picContainer}>
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
                <View style={styles.player}>
                    <PictureDisplay url={uris[0]}></PictureDisplay>
                    <UserInfo player={SECTIONS[0].data[0].display_name} score={'46'} side='left' team={SECTIONS[0].data[0].team}/>
                </View>
                <View style={styles.player}>
                    <UserInfo player={SECTIONS[0].data[1].display_name} score={'40'} side='right' team={SECTIONS[0].data[1].team}/>
                    <PictureDisplay url={uris[1]}></PictureDisplay>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        height:100,
        borderRadius:8,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems: 'center',
        width:'100%',
        borderBottomColor: 'rgba(256,256,256,0.1)',
        borderBottomWidth:0.5

    },
    view: {
        flex: 1,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:0,
        paddingVertical:0,
        marginHorizontal: 30,
        width:'100%'
    },
    h3: {
        color: "rgba(256,256,256,0.5)",
        fontSize: 12,
        fontWeight: "300",
    },
    h2: {
        color: "rgba(256,256,256,1)",
        fontSize: "16",
        fontWeight: "500",
    },
    date: {
        color: "rgba(256,256,256,0.25)",
        fontSize: "14",
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
        justifyContent:'center',
        alignItems: 'flex-end',
        height:80,
        marginHorizontal:10
    },
    right:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'baseline',
        height: 80,
        marginHorizontal:10
    },
    itemPhoto: {
        width: 50, 
        height:50, 
        borderRadius: 60/ 2,
        borderColor:'rgba(256, 256, 256, 0.5)',
        borderWidth:1,
       
      },
    winner: {
        fontSize: 30,
        fontWeight: "600",
        //color: "#DBFF00",
        color: "white",
        height: 40,
        //shadowColor:"#DBFF00",
        shadowColor:"white",
        shadowOpacity:0.2,
        shadowRadius:10,
    },
    loser: {
        fontSize: 30,
        fontWeight: "600",
        color: 'rgba(256,256,256,0.2)',
        height: 40,
    },
    picContainer: {
        height: 50,
        marginHorizontal:20,
        shadowColor:"black",
        shadowOpacity:0.2,
        shadowRadius:4, 
    },
    player:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        flex:1
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
          team: 'Portland'
        },
        {
          key: '2',
          display_name: 'Octavia',
          uri: 'https://media.licdn.com/dms/image/C5603AQFsHOwly1yfKA/profile-displayphoto-shrink_800_800/0/1540257823299?e=1678924800&v=beta&t=tYXL893KTMmflebzL8lVI5j_yCZO-mUKc56FNgZ_83I',
          team: 'Clippers'
        },
  
        {
          key: '3',
          display_name: 'Max',
          uri: 'https://media.licdn.com/dms/image/C5603AQFI24okpCiJRg/profile-displayphoto-shrink_800_800/0/1618847906137?e=1678924800&v=beta&t=I1ADXlyb_SBqHe3oywa2CJTYeSum591wVi9aEj1vvIA',
          team: 'Philadelphia'
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