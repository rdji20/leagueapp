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


export const Home = ({ navigation, route}) => {
    const [leagues, setLeagues] = useState([])
    const [league, setLeague] = useState('')
    const [pene, setPene] = useState('')
    const [leagueNames, setLeagueNames] = useState([{}])

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
            //console.log(res.data.leagues)
            setLeagues(res.data.leagues)
            console.log('res:',res.data.leagues.ids[0])
            console.log(res.data.leagues.data[0])
            if (res.data.leagues.ids[0]){
                console.log('Yes')
                setLeague(leaguesMock[1])
                setLeagues(leaguesMock)
                setLeagueNames(getLeagueNames(leaguesMock))
            }else{
                console.log('Nos')
                setLeagueNames([{value:'No Leagues yet. Create or join a league', key:-1}])
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const getLeagueNames = (leagueArr) => {
        const leagueNames = leagueArr.map((league) => {return {value:league.leagueName, key:league.leagueId}})
        return leagueNames
    }

    const handleSelectLeague = (key) => {
        console.log('looking for')
        console.log(key)
        if (key){
            const found = leagues.find(lg => lg.leagueId === key)
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
                {leagues[0] ? <LeagueHome league={league} navigation={navigation} route={route}/>: <NoLeagues navigation={navigation} route={route}/>}

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
});

const leaguesMock = [
    {
        leagueName:'2k League',
        players:[
            {uId: 'ksjdlaskj', displayName:'Roberto', wins:10, losses:20},
            {uId: 'IOAJODIJ', displayName:'Octavio', wins:9, losses:21},
            {uId: 'asdaead', displayName:'Claudio', wins:30, losses:0},
            {uId: 'twergwer', displayName:'Meo', wins:0, losses:30},
        ],
        matches:[],
        leagueId:'kjashdadioe',
        iconId: 'google-controller'
    },
    {
        leagueName:'Padel',
        players:[
            {uId: 'afafedasf', displayName:'Kamila', wins:10, losses:20},
            {uId: 'IOAJODIJ', displayName:'Andrea', wins:9, losses:21},
            {uId: 'asdaead', displayName:'Claudio', wins:30, losses:0},
            {uId: 'defafasf', displayName:'Daniela', wins:0, losses:30},
            {uId: 'hdfhdfh', displayName:'LG', wins:0, losses:30},
            {uId: 'jymytm', displayName:'Victor Serna', wins:0, losses:30},
        ],
        matches:[],
        leagueId:'pasodpaoskdpo',
        iconId: 'tennis-ball'
    },
    {
        leagueName:'Spike @ El Capitan',
        players:[
            {uId: 'afafedasf', displayName:'Kamila', wins:10, losses:20},
            {uId: 'IOAJODIJ', displayName:'Rolando', wins:9, losses:21},
            {uId: 'asdaead', displayName:'Claudio', wins:30, losses:0},
            {uId: 'twergwer', displayName:'Daniela', wins:0, losses:20},
            {uId: 'twergwer', displayName:'LG', wins:15, losses:15},
            {uId: 'twergwer', displayName:'Victor Serna', wins:0, losses:30},
        ],
        matches:[],
        leagueId:'sfaeraesgf',
        iconId: 'handball'
    },
]

