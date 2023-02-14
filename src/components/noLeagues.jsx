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

export const NoLeagues = ({ navigation, userProp, uId, displayName, handleTryAgain, setFetched, setNewLeagueCreated}) => {
    return (
        <View style={styles.view}>
            <MaterialCommunityIcons name='stadium' style={{color:'white', fontSize:46}}/>
            <Text style={styles.h1}> No Leagues Yet </Text>
            <Text style={{color:'#94a1b2', fontWeight:'400', fontSize:16, marginBottom:40}}> Create a league to start ranking your friends!</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("LeagueType", {displayName, uId, handleTryAgain, setFetched, setNewLeagueCreated})}
                style={styles.button}
            >
                <Text style={styles.buttonText}> Create League</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        flex: 1
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
        fontSize: 28,
        fontWeight: "800",
        color: "white",
        padding: 0,
        marginTop:20,
        marginBottom:10
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
        padding: 15,
        color: "#DCDCDC",
        backgroundColor: "#DBFF00",
        borderRadius: 10,
        alignItems: "center",
        width: 300,
        shadowColor:"black",
        shadowOpacity:1,
        shadowRadius:0,
        shadowOffset: {width: 5,height: 8},
    },
    buttonText: {
        fontWeight: "700",
    },
    buttonContainer: {
        alignItems: "center",
    },
});
