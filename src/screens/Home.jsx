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
import { DropdownList } from "../components/leaguesDropdown";



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
                //If getLeagues fetched correctly, get matches:
                RequestManager.getUser(user.uid).then((res) =>{
                    setDisplayName(res.data)
                    console.log('User fetched correctly: ', res.data)
                }).catch((e) => {
                    console.log(e)
                    console.log('Get User failed.')
                })
                setFetched(true)
            })
            .catch((e) => {
                console.log('Get Leagues failed')
                setGetError(true);
                setLeagueNames([{ value: "No leagues to display.", key: -1 }]);
                setFetched(true)
            });


    }, [user]);

    const getLeagueNames = (leagueArr) => {
        const leagueNames = leagueArr.leagues.data.map((element, index) => {
            return { value: element.l_name, icon:element.icon, key: leagueArr.leagues.ids[index] };
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

    /**
     * Returns league object idx when provided a leagueId. This index can be used to get get the league object from res.data.leagues[idx]
     */
    const findModifiedLeague = (id) => {
        console.log('Index modified league :',leagueIds.findIndex(leagueId => leagueId === id))
        return leagueIds.findIndex(leagueId => leagueId === id)
    }

    /**Callback function used in try again button when an error occurs.
     *
     * Fetched variable is set to false so that the loading spinner loads then the error message is removed and finally the fetch function is called again.
     */
    const handleTryAgain = () => {
        console.log('League Id on handletryagain: ', leagueId)
        setFetched(false);
        setGetError(false);
        RequestManager.getLeagues(user.uid)
            .then((res) => {
                setLeagueIds(res.data.leagues.ids); //res.data is user data
                if (res.data.leagues.ids[0]) {
                    setLeague(leagueId ? res.data.leagues.data[findModifiedLeague(leagueId)] : res.data.leagues.data[0]);//If there was a league before the handleTryAgain, the same league will be displayed
                    setLeagueId(leagueId ? leagueId : res.data.leagues.ids[0])
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
                //If getLeagues fetched correctly, get matches:
                RequestManager.getUser(user.uid).then((res) =>{
                    setDisplayName(res.data)
                    console.log('User fetched correctly: ', res.data)
                }).catch((e) => {
                    console.log(e)
                    console.log('Get User failed.')
                })
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
                    <Text style={{fontSize: 16, fontWeight:'400'}}><MaterialCommunityIcons name='account-circle' style={{fontSize:35, color:'white'}}/></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        if (!getError && fetched){
                        navigation.navigate("LeagueType", {uId:user.uid, displayName:displayName, handleTryAgain, setFetched})
                        }
                    }}
                    style={{justifyContent:'center', alignItems:'center'}}
                >
                    
                    <Text style={{ color: (!getError && fetched) ? "#DBFF00" : 'rgba(256,256,256,0.1)', fontSize: 16, fontWeight:'400'}}>
                        New League
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
                <DropdownList leagueNames={leagueNames} handleSelectLeague={handleSelectLeague}></DropdownList>
            </View>

            <LeagueScreen />
            {leagueId && fetched && !getError? <TouchableOpacity
                style={{
                    width: 60,  
                    height: 60,   
                    borderRadius: 30,
                    borderWidth:2,            
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
                onPress={() => navigation.navigate("AddScore", {users:league.users, leagueId, user, handleTryAgain, setFetched, league, setLeague, leagueId, setLeagueId})}>
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
        marginBottom:35
    },
    tryAgain: {
        color: "#8983C4",
    },
    fetching: {
        color: "rgba(256, 256, 256, 0.25)",
    }
});

