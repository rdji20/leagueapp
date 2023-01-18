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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

export const LeagueHome = ({ navigation, userProp }) => {
    const players = 5
    const matches = 0
    return (
        <ScrollView style={styles.view}>
            <View style={styles.title}>
                <Text style={styles.h1}><Entypo name='game-controller' style={{fontSize: 36}}/></Text>
                <Text style={styles.h1}>2k League</Text>
                <Text style={styles.h3}>{players} players - {matches} matches </Text>
            </View>
            <Text style={styles.h2}>League Players</Text>
            <View
                style={{
                    borderBottomColor: "rgba(256, 256, 256, 0.5)",
/*                     borderBottomWidth: 1, */
                    marginBottom: 20,
                    marginTop: 5,
                }}
            ></View>
            <DisplayUsers />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonMain}>
                    <Text style={styles.buttonTextMain}> <Ionicons name="add-sharp" style={{color:'white', fontSize:15}}/> Add Score </Text>
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
            <Text style={styles.h2}>Recent Matches</Text>
            <View
                style={{
                    borderBottomColor: "rgba(256, 256, 256, 0.5)",
/*                     borderBottomWidth: 1, */
                    marginBottom: 20,
                    marginTop: 5,
                }}
            ></View>
            <LeagueStandings />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
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
        padding: 0,
        height: 60,
        marginTop:0,
    },
    buttonMain: {
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        padding: 15,
        color: "#DCDCDC",
        backgroundColor: "#8983C4",
        borderRadius: "10px",
        alignItems: "center",
        width: 130,
    },
    buttonSecondary: {
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        padding: 15,
        color: "#DCDCDC",
        backgroundColor: "white",
        borderRadius: "10px",
        alignItems: "center",
        width: 50,
    },
    buttonTextMain: {
        color: 'white',
        fontSize:14
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
        color: "rgba(256,256,256,0.25)",
        fontSize: 16,
        marginHorizontal: 10,
        marginBottom:20
    }
});
