import React, { useEffect, useRef, useState, useContext} from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    ScrollView,
    Pressable,
    TouchableOpacity,
    TextInput,
    Keyboard
} from "react-native";
import { useIsFocused } from '@react-navigation/native'
import DisplayNewUsers from "./addUserList";
import axios from "axios";
import * as RequestManager from "../utils/RequestManager";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconNames } from "../utils/iconNames";
import InputScrollView from 'react-native-input-scroll-view'
import uuid from 'react-uuid'

export function CreateLeague({ navigation, route }) {
    const { prop1, prop2, logout, uId, displayName, handleTryAgain, setFetched, leagueType} = route.params;
    const [name, setName] = useState("");
    const [players, setPlayers] = useState([]);
    const [newName, setNewName] = useState("");
    const [icon, setIcon] = useState("camera");
    const [selectingIcon, setSelectingIcon] = useState(false);
    const [addingPlayer, setAddingPlayer] = useState(true);
    const [missingPlayer, setMissingPlayer] = useState(false)
    const [invalidName, setInvalidName] = useState(false)

    function handleCreate() {
        const newPlayers = [...players];
        newPlayers.unshift({
            displayName,
            loses: 0,
            wins: 0,
            userId: prop1.uid,
            picUri: "",
        });
        const league = {
            icon: icon ==='camera' ? 'trophy' : icon,
            name,
            players:newPlayers,
            leagueType
        };
        //redirect
        if (players.length === 1){
            setMissingPlayer(true)//This is for alerts
        }
        if (!validName()){
            setInvalidName(true)//This is for alerts
        }
        if (validName() && players.length > 0){
        RequestManager.createLeague(league, prop1.uid)
            .then((res) => {
                setFetched(false)
                navigation.navigate("Home");
                setTimeout(() => {
                    handleTryAgain(true)
                }, "2000")
            })
            .catch((e) => {
                console.log(e);
            });
        }
    }

    const validName = () => {
        return name.split('').find((val) => val != '' && val != ' ')
    }

    function handleAddPlayer() {
        if (newName) {
            const newPlayers = [...players];
            newPlayers.unshift({
                displayName: newName,
                loses: 0,
                wins: 0,
                userId: uuid(),
                picUri: "",
            });
            setPlayers(newPlayers);
            setNewName("");
        }
    }

    const handleDeletePlayer = (uid) => {
        const copy = players.filter(element => element.userId != uid)
        setPlayers(copy)
    }

    const IconMenu = () => {
        return (
            <ScrollView style={{height:350, marginLeft:30}}>
                <View
                    style={{
                        width:300,
                        height:350,
                        flexWrap:'wrap',
                        flexDirection:"row",
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    {iconNames.map(val =>
                    <TouchableOpacity 
                        key={val}
                        style={{
                            width:50,
                            height:50,
                            margin:10,
                            borderColor:'white',
                            borderWidth:0.5,
                            backgroundColor:val===icon ? 'white' : 'transparent',
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:4
                        }}
                        onPress={() => {
                            setIcon(val)
                            setSelectingIcon(!selectingIcon)
                        }}
                        >
                        <MaterialCommunityIcons name={val} style={{color:val==icon ? 'black' : 'white', fontSize:23}}></MaterialCommunityIcons>
                    </TouchableOpacity>
                    )}

                </View>
            </ScrollView>
        )
    }

    return (
        <View 
        style={styles.createContainer}
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.pop()}
                >
                    <Text style={styles.buttonText2}> Back </Text>
                </TouchableOpacity>
                <Text style={styles.h1}>New League</Text>
                <TouchableOpacity style={styles.button1} onPress={handleCreate}>
                    <Text style={validName() && players.length > 0? styles.buttonTextValid : styles.buttonText1}> Create </Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft:20, marginBottom:20}}>
                    <View style={{...styles.container, marginTop:20}}>
                        <View style={{...styles.container, width:70, height:70, borderWidth:0.5, borderColor:'white', borderRadius:35, backgroundColor:icon === 'camera' ? '#transparent' :'white'}}>
                            <MaterialCommunityIcons name={icon} style={{fontSize:30, color:icon === 'camera' ? '#94a1b2' :'black'}}/>
                        </View>
                        <TouchableOpacity style={{marginTop:10}}onPress={() => {
                            setSelectingIcon(!selectingIcon)
                            Keyboard.dismiss()
                            }}>
                            <Text style={styles.editText}>Edit Icon</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput
                            placeholder="League Name"
                            placeholderTextColor="rgba(256, 256, 256, 0.3)"
                            value={name}
                            onChangeText={setName}
                            style={styles.leagueInput}
                        />
                    </View>
                </View>
                {selectingIcon ? <IconMenu></IconMenu>: ''}
                <Text style={{...styles.h2, marginBottom:10}}>Players</Text>
                <View style={styles.addContainer}>
                    <TextInput
                        placeholder="New Player Name"
                        placeholderTextColor={'rgba(256,256,256,0.3)'}
                        value={newName}
                        onChangeText={setNewName}
                        style={{...styles.input, width:280, borderTopLeftRadius:5, borderBottomLeftRadius:5, borderTopRightRadius:0, borderBottomRightRadius:0}}
                        onSubmitEditing={handleAddPlayer}
                    />
                    <TouchableOpacity onPress={handleAddPlayer} style={styles.addPlayerButton}>
                        <Text style={{color:newName ? '#7f5af0' : 'rgba(256,256,256,0.1)'}}>Add</Text>
                    </TouchableOpacity>
                </View> 
                <DisplayNewUsers players={players} setAddingPlayer={setAddingPlayer} displayName={displayName} handleDeletePlayer={handleDeletePlayer}></DisplayNewUsers>

            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    view: {
        width: "100%",
    },
    h2: {
        color: "rgba(256,256,256,1)",
        fontSize: "18",
        fontWeight: "500",
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 25,
    },
    h1: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        flexWrap:'wrap',
    },
    button1: {
        color: "#DCDCDC",
        alignItems: "flex-end",
        flex: 1,
        justifyContent:'baseline'
    },
    buttonText1: {
        fontWeight: "500",
        color: "rgba(256,256,256,0.2)",
        fontSize: 16,
    },
    button2: {
        borderRadius: 10,
        height: 40,
        alignItems: "baseline",
        justifyContent: "baseline",
        flex: 1,
    },
    buttonTextValid: {
        fontWeight: "600",
        color: "white",
        fontSize: 16,
    },
    buttonText2: {
        fontWeight: "400",
        color: "#7f5af0",
        fontSize: 16,
    },
    buttonContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal:15
    },
    input: {
        placeHolderTextColor: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: "white",
        width: '90%',
        borderRadius: 5,
        height: 40,
        marginVertical:5,
        marginLeft:20
    },
    itemPhoto: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderColor: "rgba(256, 256, 256, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    container: {
        display:'flex',
        alignItems: "center",
        justifyContent:'center',

    },
    createContainer: {
        marginTop: 70,
    },
    inputPlayers: {
        backgroundColor: "transparent",
        fontSize: 24,
        fontWeight: "600",
        color: "white",
    },
    addButton: {
        color: "#DBFF00",
        fontSize: 46,
        borderTopRightRadius:12
    },
    addContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom:20
    },
    labels: {
        color: "white",
        fontSize: 16,
    },
    iconOption:{
        flex:1,
        borderRadius:4,
        borderWidth:1,
        borderColor:'#fffffe',
        alignItems: 'center',
        justifyContent:'center',
        margin:10,
        width:50
    },
    dropDownActive:{
        borderWidth:1,
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: "white",
        width: 320,
        height: 60,
        borderRadius: 5,
        height: 40,
        display:'flex',
        flexDirection:'row',
        marginVertical:5,
        marginLeft:20
    },
    dropDownInactive:{
        borderWidth:1,
        borderBottomColor:'white',
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: "white",
        width: 320,
        height: 60,
        borderRadius: 5,
        height: 40,
        display:'flex',
        flexDirection:'row',
        marginVertical:5,
        marginLeft:20
    },
    addPlayerButton:{
        backgroundColor: 'rgba(0,0,0,0.5)', 
        width:60, 
        height:40, 
        borderTopRightRadius:5, 
        borderBottomRightRadius:5,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:5
    },
    editText:{
        fontWeight:'500',
        color:'#DBFF00',
        fontSize:12
    },
    leagueInput:{
        backgroundColor:'transparent',
        color:'white',
        fontSize:16,
        fontWeight:'400',
        marginLeft:20,
        width:230,
        paddingBottom:10,
        borderBottomWidth:0.5,
        borderColor:'rgba(256,256,256,0.1)'
    }
});
