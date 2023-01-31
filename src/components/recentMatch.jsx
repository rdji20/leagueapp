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

export const RecentMatches = ({ navigation, userProp , uris, teams, players, score, records}) => {
    

    /**
     * Displays UserInfo. If the info to be displayed belongs to the winner, the a prop containing left will be passed so that 
     * the pertinent styling is used. 
     * @param player -  Player name string
     * @param score -  Score 
     * @param side -  
     * @param team -  Team played with
     * @returns 
     */

    return (
        <View style={styles.container}>

            <View style={styles.view}>
                <View style={styles.playerOne}>
                    <Text style={styles.playerText}>
                        {firstName(players[0])}
                    </Text>
                    <Text style={{color: +score[0] > +score[1] ? 'white' : 'rgba(256,256,256, 0.5)', fontWeight:'500', fontSize:16}}>
                        {+score[0] > +score[1] ? <MaterialCommunityIcons name='menu-right' style={{fontSize:20}}></MaterialCommunityIcons> : ''}
                        {score[0]}
                    </Text>
                </View>
                <Text style={styles.records}>({records[0]})</Text> 
                <View style={{marginTop:10}}>
                    <View style={styles.playerOne}>
                        <Text style={styles.playerText}>
                            {firstName(players[1])}
                        </Text>
                        <Text style={{color: +score[1] > +score[0] ? 'white' : 'rgba(256,256,256, 0.5)', fontWeight:'500', fontSize:16}}>
                            {+score[1] > +score[0] ? <MaterialCommunityIcons name='menu-right' style={{fontSize:20}}></MaterialCommunityIcons> : ''}
                            {score[1]}
                        </Text>
                    </View>
                    <Text style={styles.records}>({records[1]})</Text> 
                </View>
            </View>
            <View style={styles.dateContainer}>
                <MaterialCommunityIcons name='calendar-month' style={{color:'white', fontSize:16, marginBottom:5}}/>
                <Text style={styles.date}> Yesterday </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        height:120,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        width:355,
        borderBottomWidth:0.5, 
        borderWidth:1,
        backgroundColor:'#242629',
        borderRadius:8,
        shadowColor:"black",
        shadowOpacity:0.5,
        shadowRadius:1,
        shadowOffset: {width: 5,height: 8},
        marginVertical:8

    },
    view: {
        flex: 1,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems:'baseline',
        borderWidth:0,
        paddingVertical:0,
        width:'100%',
        marginLeft:20
    },
    date: {
        color: "#fffffe",
        fontSize: "14",
    },
    player:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        flex:1
    },
    playerOne: {
        display:'flex',
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems:'center',
        width:200,
    },
    dateContainer:{
        backgroundColor: 'rgba(256,256,256, 0.1)',
        height: '100%',
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:6,
        borderBottomRightRadius:8,
    },

    playerText:{
        color:'#fffffe',
        fontWeight:'600'
    },
    scoreText:{
        fontSize:20
    },
    records:{
        fontSize:12,
        color:'rgba(256, 256, 256, 0.25)'

    }

});