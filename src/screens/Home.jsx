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
import { LeagueHome } from "../components/leagueHome";
import { NoLeagues } from "../components/noLeagues";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'


export const Home = ({ navigation, route}) => {
    const {user} = route.params
    console.log(user.uid)
    return (
        <SafeAreaView style={styles.view}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Text>
                        <FontAwesome5 name='user-circle' style={{color:'white', fontSize: 30}}></FontAwesome5>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("NewLeague")}>
                    <Text>
                        <Octicons name='diff-added' style={{color:'white', fontSize: 30}}></Octicons>
                    </Text>
                </TouchableOpacity>
            </View>
            {user.uid ? <LeagueHome navigation={navigation} route={route}/>: <NoLeagues navigation={navigation} route={route}/>}
        </SafeAreaView>
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
        fontSize: 46,
        fontWeight: "800",
        color: "white",
        height: 40,
        margin: 10,
        padding: 0,
        height: 60,
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20
    },
});
