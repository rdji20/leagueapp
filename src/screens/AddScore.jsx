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
    TextInput,
    Modal
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RecentMatches } from "../components/recentMatch";
import { SelectPlayer } from "../components/selectPlayer";
import { postScore } from "../utils/RequestManager";

export const AddScoreScreen = ({route, navigation}) => {
    const {users, leagueId, user, setFetched, handleTryAgain} = route.params;
    const [playerOne, setPlayerOne] = useState({})
    const [playerTwo, setPlayerTwo] = useState({})
    const [teams, setTeams] = useState([])
    const [selecting, setSelecting] = useState(false)
    const [selectingPlayer, setSelectingPlayer] = useState('None')
    const [scoreOne, setScoreOne] = useState('')
    const [scoreTwo, setScoreTwo] = useState('')

/*     function handleCreate() {
        const league = {
            icon,
            name,
            players,
        };
        console.log("Before request manager", league);
        console.log("Before request manager", prop1.uid);
        //redirect
        if (validName()){
        RequestManager.createLeague(league, prop1.uid)
            .then((res) => {
                setFetched(false)
                navigation.navigate("Home");
                setTimeout(() => {
                    handleTryAgain()
                }, "2000")
            })
            .catch((e) => {
                console.log(e);
            });
        }
    } */

    const DefaultImage = ({user}) => {
        return (
          <View style={{backgroundColor: "rgba(256,256,256,0.1)", display:'flex', justifyContent:'center', alignItems:'center', width: 60, height: 60, borderRadius:30, borderColor:'rgba(256, 256, 256, 1)', borderWidth:0.5}}>
            <Text style={{color:"white", fontSize:16, fontWeight:'400'}}>{user.split(' ').map(val => val.charAt(0).toUpperCase())}</Text>
          </View>
        )
      }
    
    const UserInfo = ({side, player}) => {
        const scorePlayer = side ==='left' ? scoreOne: scoreTwo
        const setFunction = side ==='left' ? setScoreOne: setScoreTwo
        return (
            <View style={styles[side]} >
                <Text style={styles.h2}> {side==='left' ? 'Left Player': 'Right Player'}</Text>
                <Text style={styles.h3}> {side==='left' ? 'Team 1': 'Team 2'}</Text>
                <TextInput 
                    value={scorePlayer} 
                    placeholder={'0'}
                    style={styles[side==='left' ? 'winner': 'loser']}
                    onChangeText={setFunction}
                >
                </TextInput>
            </View>
        )
    }

    const handleAddScore = () => {
        console.log(playerOne)
        const matchData = {
            uId:user.uid,
            leagueId, 
            matchObject: {
                leagueId,
                data: [
                    {
                        uid:playerOne.userId,
                        result:+scoreOne > +scoreTwo ? 'W' : 'L',
                        score:scoreOne,
                        team:'Team 1',
                    },
                    {
                        uid:playerTwo.userId,
                        result:+scoreOne < +scoreTwo ? 'W' : 'L',
                        score:scoreTwo,
                        team:'Team 2',
                    },
                ]
            }
        }
        if (!(+scoreOne === +scoreTwo)){
            postScore(matchData).then((res) => {
                setFetched(false)
                navigation.navigate("Home");
                setTimeout(() => {
                    handleTryAgain()
                }, "2000")
            })
            .catch((e) => {
                console.log(e);
            });
        }
        console.log(matchData)
    }


    const handleSelectPlayer = (player) => {
        setSelecting(true)
        setSelectingPlayer(player)
    }
    /**
     * Holds either add user icon or selected user's image, depending on whether the user has been chosen and whether the user has a picture.
     */
    const PlayerPicture = ({player}) => {
        if (player === 'One' && playerOne.displayName){
            return playerOne.picUri != '' ? <Image style={styles.itemPhoto} source={{uri: playerOne.picUri}}/> : <DefaultImage user={playerOne.displayName}/>
        }
        if (player === 'Two' && playerTwo.displayName){
            return playerTwo.picUri != '' ? <Image style={styles.itemPhoto} source={{uri: playerTwo.picUri}}/> : <DefaultImage user={playerTwo.displayName}/>
        }
        return <MaterialCommunityIcons name='account-plus' style={{color:'white', fontSize:50, }}/> 

        //return <MaterialCommunityIcons name='account-plus' style={{color:'white', fontSize:'30'}}></MaterialCommunityIcons>
    }
    /**
     * Displays the players picture.
     * @param url - Picture uri string 
     * @returns <Image/> - Image component
     */
    const PictureDisplay = ({player}) => {
        const playerSide = player === 'One' ? playerOne : playerTwo
        return (
            <TouchableOpacity onPress={() => {handleSelectPlayer(player)}} style={styles.picContainer}>
                {<Text style={{color:'white', marginBottom:10, fontWeight:'500'}}>{playerSide.displayName ? playerSide.displayName.split(' ')[0] : 'Add Player'}</Text>}
                <View style={{borderWidth:'0', borderRadius:10}}>
                    <PlayerPicture player={player} />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <View style={styles.player}>
                    <PictureDisplay url={''} player={'One'}></PictureDisplay>
                    <View style={styles['left']} >
                        <Text style={styles.h2}>Player A</Text>
                        <Text style={styles.h3}>Points</Text>
                        <TextInput 
                            value={scoreOne} 
                            placeholder={'0'}
                            style={{...styles[+scoreOne > +scoreTwo ? 'winner' : 'loser'], textAlign:'right',}}
                            onChangeText={setScoreOne}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.player}>
                    <View style={styles['right']} >
                        <Text style={styles.h2}>Player B</Text>
                        <Text style={styles.h3}>Points</Text>
                        <TextInput 
                            value={scoreTwo} 
                            placeholder={'0'}
                            style={{...styles[+scoreOne < +scoreTwo ? 'winner' : 'loser'], textAlign:'left',}}
                            onChangeText={setScoreTwo}
                        >
                        </TextInput>
                    </View>
                    <PictureDisplay url={''} player={'Two'}></PictureDisplay>
                </View>
            </View>
            <SelectPlayer selectingPlayer={selectingPlayer} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} selecting={selecting} setSelecting={setSelecting} users={users}/>
            <TouchableOpacity onPress={() => handleAddScore()}><Text style={styles.h2}>{user.uid}</Text></TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 3,
        height:100,
        borderRadius:8,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems: 'center',
        width:'100%',
        borderBottomColor: 'rgba(256,256,256,0.1)',
        borderBottomWidth:0.5,
        marginTop:300

    },
    view: {
        flex: 1,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:0,
        paddingVertical:0,
        marginHorizontal: 30,
        width:'100%'
    },
    h3: {
        color: "rgba(256,256,256,0.5)",
        fontSize: 12,
        fontWeight: "300",
    },
    h2: {
        color: "rgba(256,256,256,1)",
        fontSize: "16",
        fontWeight: "500",
    },
    date: {
        color: "rgba(256,256,256,0.25)",
        fontSize: "14",
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
        justifyContent:'center',
        alignItems: 'flex-end',
        height:80,
        marginHorizontal:10,
        flex:1
    },
    right:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'baseline',
        height: 80,
        marginHorizontal:10,
    },
    itemPhoto: {
        width: 60, 
        height:60, 
        borderRadius: 60/ 2,
        borderColor:'rgba(256, 256, 256, 0.5)',
        borderWidth:1,
       
      },
    winner: {
        fontSize: 50,
        fontWeight: "600",
        textAlign:'right',
        //color: "#DBFF00",
        color: "white",
        height: 40,
        //shadowColor:"#DBFF00",
        shadowColor:"white",
        shadowOpacity:0.2,
        shadowRadius:10,
        width:80
    },
    loser: {
        textAlign:'left',
        fontSize: 50,
        fontWeight: "600",
        color: 'rgba(256,256,256,0.2)',
        height: 40,
        width:100
    },
    picContainer: {
        height: 50,
        marginHorizontal:20,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        shadowColor:"black",
        shadowOpacity:0.2,
        shadowRadius:4, 
    },
    player:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        flex:1
    }
});