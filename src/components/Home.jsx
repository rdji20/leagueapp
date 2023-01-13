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

export const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.view}>
            <Text style={styles.h1}>2k League</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Add Score </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.h2}>Participants</Text>
            <View
                style={{
                    borderBottomColor: "rgba(256, 256, 256, 0.5)",
                    borderBottomWidth: 1,
                    marginBottom: 20,
                    marginTop: 5,
                }}
            ></View>
            <DisplayUsers />
            <Text style={styles.h2}>Leaderboard</Text>
            <View
                style={{
                    borderBottomColor: "rgba(256, 256, 256, 0.5)",
                    borderBottomWidth: 1,
                    marginBottom: 20,
                    marginTop: 5,
                }}
            ></View>
            <LeagueStandings />
            <View>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate("Profile")}
                />
            </View>
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
        alignItems: "center",
    },
});
