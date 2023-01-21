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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import axios from "axios";
import { SelectList } from "react-native-dropdown-select-list";
import { ActivityIndicator } from "react-native-paper";


export const Home = ({ navigation, route}) => {
    const [fetched, setFetched] = useState(false)
    const [leagues, setLeagues] = useState([])
    const [league, setLeague] = useState('')
    const [pene, setPene] = useState('')
    const [leagueNames, setLeagueNames] = useState([{}])
    const [getError, setGetError] = useState(false)
    const [leagueIds, setLeagueIds] = useState([])

    const {user} = route.params
    useEffect(() => {
        get_leagues(user.uid)
    }, [user])

    /**
    * Makes a GET call to the backend once after the first mount. The response is stored in the state variable legagues. 
    * @param uid - User id string
    */
    const get_leagues = async (uid) => {
        try{
            const res = await axios.get('http://192.168.100.64:3000/leagues', {
                params: {
                    user_id: uid,
                }
            
            })
            console.log(res.data.leagues.data[0])
            setLeagueIds(res.data.leagues.ids)//res.data is user data
            if (res.data.leagues.ids[0]){
                console.log('Yes')
                setLeague(res.data.leagues.data[0])
                setLeagues(res.data.leagues.data)
                setLeagueNames(getLeagueNames(res.data))
            }else{
                console.log('Nos')
                setLeagueNames([{value:'No Leagues yet. Create or join a league', key:-1}])
            }
        }
        catch(e){
            console.log(e)
            setGetError(true)
            setLeagueNames([{value:'No leagues to display.', key:-1}])
            
        }
        setFetched(true)
    }

    const getLeagueNames = (leagueArr) => {
        const leagueNames = leagueArr.leagues.data.map((element, index) => {return {value:element.l_name, key:leagueArr.leagues.ids[index]}})
        return leagueNames
    }

    const handleSelectLeague = (key) => {
        if (key){
            const found = leagues.find((el, index) => leagueIds[index] === key)
            setLeague(found)
            console.log(found)
        }
    }



    const LeagueHomeView = () => {
        
        return(
            <View>
                <Text style={styles.h2}>{`League: ${league} `}</Text>
                <Text style={styles.h2}>{`Leagues: ${leagues} `}</Text>
                <Text style={styles.h2}>{`LeagueNames: ${leagueNames} `}</Text>
            </View>
        )
    }
    /**
     * Contains loading spinner displayed while the getLeagues function is called.
     * @returns LoadingScreen - the loading screen component.
     */
    const LoadingScreen = () => {
        return (
            <View style={{display: 'flex', flexDirection: "column", alignItems:'center', marginTop:200}}>
                <ActivityIndicator size={'medium'} style={{marginBottom: 20}}></ActivityIndicator>
                <Text style={styles.h2}> Fetching your leagues!</Text>
            </View>
        )
    }

    /**Callback function used in try again button when an error occurs. 
     * 
     * Fetched variable is set to false so that the loading spinner loads then the error message is removed and finally the fetch function is called again.
     */
    const handleTryAgain = () => {
        setFetched(false)
        setGetError(false)
        get_leagues(user.uid)
    }
    /**
     * This component loads one of four things:
     * - Loading screen if fetched variable is false
     * - Error Screen if fetched variable is true but getError variable is false
     * - No Leagues component if fetched is true but there are no leagues
     * - League Home Page if fetch is true and leagues exist
     * 
     */
    const LeagueScreen = () => {
        if (!fetched){
            return <LoadingScreen></LoadingScreen>
        }
        if (getError){
            return <ErrorScreen/>
        }
        if(leagues[0]){
            return <LeagueHome league={league} navigation={navigation} route={route}></LeagueHome>
        }
        return <NoLeagues navigation={navigation} route={route}></NoLeagues>
    }

    const ErrorScreen = () => {
        return (
            <View style={{display: 'flex', flexDirection: "column", alignItems:'center', marginTop:200}}>
                <Text style={{marginBottom:10}}><MaterialCommunityIcons name='trophy-broken' style={{color:'white', fontSize:50}}/></Text>
                <Text style={styles.h2}> Something went wrong. </Text>
                <Text style={styles.h3}> Check your internet connection and try again. </Text>
                <TouchableOpacity style={{marginTop: 30}} onPress={handleTryAgain}><Text style={styles.tryAgain}>Try Again</Text></TouchableOpacity>
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.view}>
{/*             <LeagueHomeView></LeagueHomeView> */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Text>
                        <FontAwesome5 name='user-circle' style={{color:'white', fontSize: 26}}></FontAwesome5>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("NewLeague")}>
                    <Text>
                        <Octicons name='diff-added' style={{color:'#DBFF00', fontSize: 26}}></Octicons>
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <SelectList
                    setSelected={(key) => handleSelectLeague(key)}
                    save='key'
                    data={leagueNames}
                    dropdownTextStyles={{color:'white'}}
                    placeholder='My Leagues'
                    search={false}
                    arrowicon={<MaterialCommunityIcons name='chevron-down' style={{color:'rgba(256,256,256,0.5)', fontSize:22}}></MaterialCommunityIcons>}
                    inputStyles={{color:'rgba(256,256,256,0.5)', textAlign:'center', fontWeight:'600', fontSize:18}}
                    boxStyles={{color:'rgba(256,256,256,0.5)',borderWidth:'0', width:150}}
                    dropdownStyles ={{color:'rgba(256,256,256,0.5)', width:300, }}
                />
            </View> 
            {/* <View > */}
            <LeagueScreen/>

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
        textAlign:'center'
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
        marginHorizontal: 30,
        marginTop: 10
    },
    tryAgain: {
        color:"#8983C4"
    }
});

const leaguesMockCode = [
    {
        l_name:'2k League',
        users:[
            {uId: 'ksjdlaskj', displayName:'Roberto', wins:10, losses:20},
            {uId: 'IOAJODIJ', displayName:'Octavio', wins:9, losses:21},
            {uId: 'asdaead', displayName:'Claudio', wins:30, losses:0},
            {uId: 'twergwer', displayName:'Meo', wins:0, losses:30},
        ],
        matches:[],
        leagueId:'kjashdadioe',
        icon: 'google-controller'
    },
    {
        l_name:'Padel',
        users:[
            {uId: 'afafedasf', displayName:'Kamila', wins:10, losses:20},
            {uId: 'IOAJODIJ', displayName:'Andrea', wins:9, losses:21},
            {uId: 'asdaead', displayName:'Claudio', wins:30, losses:0},
            {uId: 'defafasf', displayName:'Daniela', wins:0, losses:30},
            {uId: 'hdfhdfh', displayName:'LG', wins:0, losses:30},
            {uId: 'jymytm', displayName:'Victor Serna', wins:0, losses:30},
        ],
        matches:[],
        leagueId:'pasodpaoskdpo',
        icon: 'tennis-ball'
    },
    {
        l_name:'Spike @ El Capitan',
        users:[
            {uId: 'afafedasf', displayName:'Kamila', wins:10, losses:20},
            {uId: 'IOAJODIJ', displayName:'Rolando', wins:9, losses:21},
            {uId: 'asdaead', displayName:'Claudio', wins:30, losses:0},
            {uId: 'twergwer', displayName:'Daniela', wins:0, losses:20},
            {uId: 'twergwer', displayName:'LG', wins:15, losses:15},
            {uId: 'twergwer', displayName:'Victor Serna', wins:0, losses:30},
        ],
        matches:[],
        leagueId:'sfaeraesgf',
        icon: 'handball'
    },
]

