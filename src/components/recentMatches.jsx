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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RecentMatches } from "./recentMatch";

export const RecentMatchesList = ({ navigation, userProp, matches, users}) => {

    matches.reverse()
    const findDisplayName = (uid) => {
        return (users.find(element => element.userId === uid))['displayName']
    }

    const MatchesList = () => {
        return (matches.slice(0, 3).map(function(match){return <RecentMatches key={match.matchId} players={[findDisplayName(match.data[0].uid), findDisplayName(match.data[1].uid)]} score={[match.data[0].score,match.data[1].score]} teams={[match.data[0].team, match.data[1].team]} />}))
    }

    return (
        <View style={styles.view}>
            <MatchesList></MatchesList>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:0,
        paddingBottom:10,
        marginHorizontal:15,
        padding:10,
        marginBottom:50,
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
});
