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
import { RecentMatches } from "./recentMatch";
import LeagueStandings from "./RankingTable";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RecentMatchesList } from "./recentMatches";

export const LeagueHome = ({ navigation, userProp }) => {
    const players = 5
    const matches = 0
    return (
        <ScrollView style={styles.view}>
            <View style={styles.title}>
                <Text style={styles.icon}><Entypo name='game-controller' style={{fontSize: 36}}/></Text>
                <Text style={styles.h1}>2k League</Text>
                <View style={styles.description}>
                    <Text style={styles.h3}><Feather name='users' style={{color:'white', fontSize:16}}></Feather>  {players} players</Text>
                    <Text style={styles.h3}><MaterialCommunityIcons name='sword-cross' style={{color:'white', fontSize:16}}></MaterialCommunityIcons> {matches}  matches </Text>
                    <Text style={styles.h3}><MaterialCommunityIcons name='crown' style={{color:'white', fontSize:16}}></MaterialCommunityIcons>  Claudio </Text>
                </View>
            </View>
            <View
                style={{
                    width: 150,
                    borderBottomColor: "rgba(256, 256, 256, 0.5)",
                    borderBottomWidth: 1,
                    marginBottom: 30,
                    marginTop: 5,
                }}
            ></View>
            
            <Text style={styles.h2}>League Players</Text>

            <DisplayUsers />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonMain}>
                    <Text style={styles.buttonTextMain}> <Ionicons name="add-circle" style={{color:'black', fontSize:16}}/> Add Score </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSecondary}>
                    <Text style={styles.buttonTextSecondary}> <FontAwesome5 name="user-plus" style={{color:'black'}}> </FontAwesome5></Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.h2}>Leaderboard</Text>
            <View
                style={{
                    borderBottomColor: "rgba(256, 256, 256, 0.5)",
/*                     borderBottomWidth: 1, */
                    marginBottom: 20,
                    marginTop: 5,
                }}
            ></View>
            <LeagueStandings />
            <View style={styles.recentMatches}>
                <Text style={styles.h2}>Recent Matches</Text>
                <TouchableOpacity style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
            </View>
            <View
                style={{
                    borderBottomColor: "rgba(256, 256, 256, 0.5)",
/*                     borderBottomWidth: 1, */
                    marginBottom: 20,
                    marginTop: 5,
                }}
            ></View>
            <RecentMatchesList></RecentMatchesList>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    h2: {
        color: "white",
        fontSize: "20",
        fontWeight: "600",
        marginTop: 5,
        marginHorizontal: 10,
    },
    h1: {
        fontSize: 40,
        fontWeight: "800",
        color: "white",
        height: 40,
        padding: 0,
        height: 60,
        marginTop:0,
        shadowColor:'white',
        shadowOpacity:0.2,
        shadowRadius:10
    },
    buttonMain: {
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: "#DCDCDC",
        backgroundColor: "#DBFF00",
        borderRadius: 6,
        alignItems: "center",
        width: 150,
    },
    buttonSecondary: {
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        color: "#DCDCDC",
        backgroundColor: "white",
        borderRadius: 6,
        alignItems: "center",
        width: 50,
    },
    buttonTextMain: {
        color: 'black',
        fontSize:14,
        fontWeight:'600'
    },
    buttonTextSecondary: {
        color: 'black',
        fontSize:12
    },
    buttonContainer: {
        alignItems: "center",
        display: 'flex',
        flexDirection:'row',
    },
    title: {
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h3: {
        color: "rgba(256,256,256,0.30)",
        fontSize: 16,
        marginHorizontal: 10,
        marginBottom:10
    },
    description: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:10,
    },
    icon: {
        fontSize: 40,
        fontWeight: "800",
        color: "white",
        height: 40,
        padding: 0,
        height: 60,
        marginTop:0,
    },
    recentMatches:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight: 20
    },
    seeAll: {
        color:'rgba(256,256,256,0.3)'
    }

});
