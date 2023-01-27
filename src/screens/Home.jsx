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
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import axios from "axios";
import { SelectList } from "react-native-dropdown-select-list";
import { ActivityIndicator } from "react-native-paper";
import * as RequestManager from "../utils/RequestManager";


import { useIsFocused } from '@react-navigation/native'

export const Home = ({ navigation, route }) => {
    const [fetched, setFetched] = useState(false);
    const [leagues, setLeagues] = useState([]);
    const [league, setLeague] = useState("");
    const [leagueId, setLeagueId] = useState('')
    const [pene, setPene] = useState("");
    const [leagueNames, setLeagueNames] = useState([{}]);
    const [getError, setGetError] = useState(false);
    const [leagueIds, setLeagueIds] = useState([]);
    const [displayName, setDisplayName] = useState('')
    const [newLeagueCreated, setNewLeagueCreated] = useState(false)
    const isFocused = useIsFocused()

    const { user } = route.params;
    useEffect(() => {
        RequestManager.getLeagues(user.uid)
            .then((res) => {
                //console.log(res.data.leagues.data[0]);
                setLeagueIds(res.data.leagues.ids); //res.data is user data
                if (res.data.leagues.ids[0]) {
                    setLeague(res.data.leagues.data[0]);
                    setLeagueId(res.data.leagues.ids[0])
                    setLeagues(res.data.leagues.data);
                    setLeagueNames(getLeagueNames(res.data));
                } else {
                    setLeagueNames([
                        {
                            value: "No Leagues yet. Create or join a league",
                            key: -1,
                        },
                    ]);
                }
                setFetched(true)
            })
            .catch((e) => {
                setGetError(true);
                setLeagueNames([{ value: "No leagues to display.", key: -1 }]);
                setFetched(true)
            });
            RequestManager.getUser(user.uid).then((res) =>{
                setDisplayName(res.data)
            }).catch((e) => {
                console.log(e)
            })
    }, [user]);

    const getLeagueNames = (leagueArr) => {
        const leagueNames = leagueArr.leagues.data.map((element, index) => {
            return { value: element.l_name, key: leagueArr.leagues.ids[index] };
        });
        return leagueNames;
    };

    const handleSelectLeague = (key) => {
        if (key) {
            const found = leagues.find((el, index) => leagueIds[index] === key);
            const index = leagues.findIndex((el, index) => leagueIds[index] === key);
            setLeague(found);
            setLeagueId(leagueIds[index])
        }
    };

    const LeagueHomeView = () => {
        return (
            <View>
                <Text style={styles.h2}>{`League: ${league} `}</Text>
                <Text style={styles.h2}>{`Leagues: ${leagues} `}</Text>
                <Text style={styles.h2}>{`LeagueNames: ${leagueNames} `}</Text>
            </View>
        );
    };
    /**
     * Contains loading spinner displayed while the getLeagues function is called.
     * @returns LoadingScreen - the loading screen component.
     */
    const LoadingScreen = () => {
        return (
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 200,
                }}
            >
                <ActivityIndicator
                    size={"medium"}
                    style={{ marginBottom: 20 }}
                ></ActivityIndicator>
                <Text style={styles.h2}> Fetching your leagues!</Text>
            </View>
        );
    };

    /**Callback function used in try again button when an error occurs.
     *
     * Fetched variable is set to false so that the loading spinner loads then the error message is removed and finally the fetch function is called again.
     */
    const handleTryAgain = () => {
        setFetched(false);
        setGetError(false);
        RequestManager.getLeagues(user.uid)
            .then((res) => {
                setLeagueIds(res.data.leagues.ids); //res.data is user data
                if (res.data.leagues.ids[0]) {
                    setLeague(res.data.leagues.data[0]);
                    setLeagueId(res.data.leagues.ids[0])
                    setLeagues(res.data.leagues.data);
                    setLeagueNames(getLeagueNames(res.data));
                } else {
                    setLeagueNames([
                        {
                            value: "No Leagues yet. Create or join a league",
                            key: -1,
                        },
                    ]);
                }
                setFetched(true)
            })
            .catch((e) => {
                setGetError(true);
                setLeagueNames([{ value: "No leagues to display.", key: -1 }]);
                setFetched(true)
            });
    };
    /**
     * This component loads one of four things:
     * - Loading screen if fetched variable is false
     * - Error Screen if fetched variable is true but getError variable is false
     * - No Leagues component if fetched is true but there are no leagues
     * - League Home Page if fetch is true and leagues exist
     *
     */
    const LeagueScreen = () => {
        if (!fetched) {
            return <LoadingScreen></LoadingScreen>;
        }
        if (getError) {
            return <ErrorScreen />;
        }
        if (leagues[0]) {
            return (
                <LeagueHome
                    league={league}
                    leagueId={leagueId}
                    navigation={navigation}
                    route={route}
                    user={user}
                    setFetched={setFetched}
                    handleTryAgain={handleTryAgain}
                ></LeagueHome>
            );
        }
        return <NoLeagues uId={user.uid} displayName={displayName} handleTryAgain={handleTryAgain} setFetched={setFetched}navigation={navigation} route={route}></NoLeagues>;
    };

    const ErrorScreen = () => {
        return (
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 200,
                }}
            >
                <Text style={{ marginBottom: 10 }}>
                    <MaterialCommunityIcons
                        name="trophy-broken"
                        style={{ color: "white", fontSize: 50 }}
                    />
                </Text>
                <Text style={styles.h2}> Something went wrong. </Text>
                <Text style={styles.h3}>
                    {" "}
                    Check your internet connection and try again.{" "}
                </Text>
                <TouchableOpacity
                    style={{ marginTop: 30 }}
                    onPress={handleTryAgain}
                >
                    <Text style={styles.tryAgain}>Try Again</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.view}>
            {/*             <LeagueHomeView></LeagueHomeView> */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile", {displayName})}
                >
                    <Text style={{ color: "#DBFF00", fontSize: 16, fontWeight:'400'}}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("NewLeague", {uId:user.uid, displayName:displayName, handleTryAgain, setFetched})}
                >
                    <Text style={{ color: "#DBFF00", fontSize: 16, fontWeight:'400'}}>
                        Create League
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <SelectList
                    setSelected={(key) => handleSelectLeague(key)}
                    save="key"
                    data={leagueNames}
                    dropdownTextStyles={{ color: "white" }}
                    placeholder="My Leagues"
                    search={false}
                    arrowicon={
                        <MaterialCommunityIcons
                            name="chevron-down"
                            style={{
                                color: "rgba(256,256,256,0.5)",
                                fontSize: 22,
                            }}
                        ></MaterialCommunityIcons>
                    }
                    inputStyles={{
                        color: "rgba(256,256,256,0.5)",
                        textAlign: "center",
                        fontWeight: "600",
                        fontSize: 18,
                    }}
                    boxStyles={{
                        color: "rgba(256,256,256,0.5)",
                        borderWidth: "0",
                        width: 150,
                    }}
                    dropdownStyles={{
                        color: "rgba(256,256,256,0.5)",
                        width: 300,
                    }}
                />
            </View>
            {/* <View > */}
            <LeagueScreen />
            {leagueId ? <TouchableOpacity
                style={{
                    width: 60,  
                    height: 60,   
                    borderRadius: 30,            
                    backgroundColor: '#DBFF00',                                    
                    position: 'absolute',                                          
                    bottom: 80,                                                    
                    right: 40,
                    shadowColor:"black",
                    shadowOpacity:1,
                    shadowRadius:10,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                  }}
                onPress={() => navigation.navigate("AddScore", {users:league.users, leagueId, user, handleTryAgain, setFetched})}>
                    <Text><MaterialCommunityIcons name='plus' style={{fontSize:45, color:'black'}}/></Text>
            </TouchableOpacity> : ''}

            {/* </View> */}
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
    h3: {
        fontSize: 12,
        fontWeight: "500",
        color: "rgba(256, 256, 256, 0.5)",
        width: 200,
        textAlign: "center",
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginTop: 10,
    },
    tryAgain: {
        color: "#8983C4",
    },
});

