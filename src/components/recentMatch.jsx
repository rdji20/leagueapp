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
import DisplayUsers from "./LeagueUsers";
import LeagueStandings from "./RankingTable";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { firstName } from "../utils/helperFunctions";
import { DefaultImage } from "./defaultImage";

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
                <Text style={styles.h3}> {side==='left' ? teams[0]: teams[1]}</Text>
                <Text style={styles[+score[0] > +score[1] ? 'winner': 'loser']} > {side==='left' ? score[0]: score[1]}</Text>
            </View>
        )
    }
    /**
     * Displays the players picture.
     * @param url - Picture uri string 
     * @returns <Image/> - Image component
     */
    const PictureDisplay = ({displayName}) => {
        return (
            <View style={styles.picContainer}>
                <DefaultImage displayName={displayName}></DefaultImage>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <View style={styles.player}>
                    <View>
                        <PictureDisplay displayName={players[0]}></PictureDisplay>
                        <Text style={styles.name}> {firstName(players[0])}</Text> 
                    </View>
                    <UserInfo player={'Player B'} score={'46'} side='left' team={'Team 1'}/>
                </View>
                <View style={styles.player}>
                    <UserInfo player={'Player A'} score={'40'} side='right' team={'Team 2'}/>
                    <View>
                        <PictureDisplay displayName={players[1]}></PictureDisplay>
                        <Text style={styles.name}> {firstName(players[1])}</Text> 
                    </View>
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
        textAlign:'center',
        marginTop: 10
    },
    name:{
        color: "white",
        fontSize: 12,
        fontWeight: "00",
        textAlign:'center',
        marginTop: 10
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
        fontSize: 40,
        fontWeight: "600",
        color: "white",
        height: 40,
        shadowColor:"white",
        shadowOpacity:0.2,
        shadowRadius:10,
        textAlign:'right'
    },
    loser: {
        fontSize: 40,
        fontWeight: "600",
        color: 'rgba(256,256,256,0.1)',
        height: 40,
        textAlign:'left'
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
    },
});