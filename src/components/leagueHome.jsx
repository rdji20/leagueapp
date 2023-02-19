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
import { RecentMatches } from "./recentMatch";
import LeagueStandings from "./RankingTable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RecentMatchesList } from "./recentMatches";
import { getMatches } from "../utils/RequestManager";
import { compare } from "../utils/helperFunctions";
import { firstName } from "../utils/helperFunctions";
import { Description } from "./description";


export const LeagueHome = ({
    navigation,
    league,
    leagueId,
    user,
    handleTryAgain,
    setFetched,
}) => {
    const [matches, setMatches] = useState([]);

    const leagueUsers = [...league.users];
    leagueUsers.sort(compare).reverse(); //Ordering User List by V0 criterion

    const includeAddUserButton = (users) => {
        return [{
            button:true,
            uId: user.uid,
            leagueId,
            setFetched,
            handleTryAgain,
        },...league.users]
    }

    useEffect(() => {
        getMatches(leagueId)
            .then((res) => {
                const matchesTemp = [
                    ...res.data.matches.data.map((val, index) => {
                        return {
                            ...val,
                            matchId: res.data.matches.ids[index],
                            timeStamp: res.data.matches.times[index],
                        };
                    }),
                ];
                setMatches(matchesTemp);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const GenerateTitle = () => {
        return (
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {league.l_name.split(" ").map((str, index) => (
                    <Text key={index} style={styles.h1}>
                        {str.charAt(0).toUpperCase() + str.slice(1)}
                    </Text>
                ))}
            </View>
        );
    };

    return (
        <ScrollView style={styles.view}>
            <View style={styles.title}>
                <View style={{ ...styles.container, marginTop: 20 }}>
                    <MaterialCommunityIcons
                        name={league.icon}
                        style={{ fontSize: 55, color: "white" }}
                    />
                </View>
                <GenerateTitle />
                <Description numMatches={matches.length} numPlayers={league.users.length} topPlayer={firstName(leagueUsers[0].displayName)}/>
            </View>
            <DisplayUsers users={includeAddUserButton(league.users)} navigation={navigation}/>
            <Text style={styles.h2}>Leaderboard</Text>
            <LeagueStandings users={leagueUsers} userId={user.uid}></LeagueStandings>
            <View style={styles.recentMatches}>
                {/* <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("AddNewPlayer", {
                            uId: user.uid,
                            leagueId,
                            setFetched,
                            handleTryAgain,
                        })
                    }
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.seeAll}>Add New Player</Text>
                </TouchableOpacity> */}
            </View>

            <View style={styles.recentMatches}>
                <Text style={styles.h2}>Recent Matches</Text>
                <TouchableOpacity
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <RecentMatchesList
                matches={matches}
                users={league.users}
            ></RecentMatchesList>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        zIndex: -1,
    },
    h2: {
        color: "white",
        fontSize: "20",
        fontWeight: "600",
        marginTop: 5,
        marginHorizontal: 20,
    },
    h1: {
        fontSize: 40,
        fontWeight: "800",
        color: "white",
        padding: 0,
        marginTop: 0,
        shadowColor: "white",
        shadowOpacity: 0.2,
        shadowRadius: 15,
        width: 500,
        textAlign: "center",
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
        color: "black",
        fontSize: 14,
        fontWeight: "600",
    },
    buttonTextSecondary: {
        color: "black",
        fontSize: 12,
    },
    buttonContainer: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
    },
    title: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 10,
    },
    h3: {
        color: "#fffffe",
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center",
    },
    descriptionText: {
        color:'#94a1b2',
        fontWeight:'300'
    },
    icon: {
        fontSize: 40,
        fontWeight: "800",
        color: "white",
        padding: 0,
        height: 55,
        marginTop: 10,
        marginBottom: 10,
    },
    recentMatches: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 20,
    },
    seeAll: {
        color: "#7f5af0",
    },
    newPlayerBtn: {
        color: "#DBFF00",
        fontWeight: "bold",
        fontSize: 14,
    },
    infoContainer: {
        marginHorizontal: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        width: 100,
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
    },
});
