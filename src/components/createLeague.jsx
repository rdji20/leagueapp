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
} from "react-native";
import { useIsFocused } from '@react-navigation/native'
import DisplayNewUsers from "./addUserList";
import axios from "axios";
import * as RequestManager from "../utils/RequestManager";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconNames } from "../utils/iconNames";
import InputScrollView from 'react-native-input-scroll-view'

export function CreateLeague({ navigation, route }) {
    const { prop1, prop2, logout, uId, displayName, handleTryAgain, setFetched} = route.params;
    const [name, setName] = useState("");
    const [players, setPlayers] = useState([{displayName, loses: 0, wins: 0, userId: prop1.uid, picUri: ""}]);
    const [newName, setNewName] = useState("");
    const [icon, setIcon] = useState("trophy");
    const [selectingIcon, setSelectingIcon] = useState(false);
    const [addingPlayer, setAddingPlayer] = useState(false);
    console.log('displayName: ', displayName)

    function handleCreate() {
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
    }

    const validName = () => {
        return name.split().find((val) => val != '' && val != ' ')
    }

    function handleAddPlayer() {
        const len = players.length.toString();
        console.log(newName);
        if (newName) {
            console.log(players);
            const newPlayers = [...players];
            newPlayers.unshift({
                displayName: newName,
                loses: 0,
                wins: 0,
                userId: len,
                picUri: "",
            });
            setPlayers(newPlayers);
            setNewName("");
        }
    }

    return (
        <View 
        style={styles.createContainer}
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.buttonText2}> Back </Text>
                </TouchableOpacity>
                <Text style={styles.h1}>New League</Text>
                <TouchableOpacity style={styles.button1} onPress={handleCreate}>
                    <Text style={!validName() ? styles.buttonText1 : styles.buttonTextValid}> Create </Text>
                </TouchableOpacity>
            </View>
            <InputScrollView
                style={{marginHorizontal:30}}
                keyboardOffset={150}
                showsVerticalScrollIndicator={false}
                >
                <View style={{...styles.container, marginTop:20}}>
                    <View style={{...styles.container, width:100, height:100, borderWidth:0.5, borderColor:'white', borderRadius:50, backgroundColor:'white'}}>
                        <MaterialCommunityIcons name={icon} style={{fontSize:50, color:'black'}}/>
                    </View>
                </View>
                <Text style={styles.h2}>League Name</Text>
                <TextInput
                    placeholder="e.g. Fifa League"
                    placeholderTextColor="rgba(256, 256, 256, 0.5)"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <Text style={styles.h2}>League Icon</Text>
                <TouchableOpacity style={styles[!selectingIcon ? 'dropDownActive' : 'dropDownInactive']} onPress={() => {setSelectingIcon(!selectingIcon)}}>
                    <Text style={{color:'white'}}>Select League Icon</Text><MaterialCommunityIcons name={!selectingIcon ?'chevron-right':'chevron-down'} style={{color:'white', fontSize:18}}></MaterialCommunityIcons>
                </TouchableOpacity>
                {selectingIcon ? 
                <ScrollView style={{height:200}}>
                    <View
                        style={{
                            width:300,
                            height:300,
                            flexWrap:'wrap',
                            flexDirection:"row",
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        {iconNames.map(val =>
                        <TouchableOpacity 
                            style={{
                                width:50,
                                height:50,
                                margin:10,
                                borderColor:'white',
                                borderWidth:0.5,
                                backgroundColor:val==icon ? 'white' : 'transparent',
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:4
                            }}
                            onPress={() => {
                                setIcon(val)
                            }}
                            >
                            <MaterialCommunityIcons name={val} style={{color:val==icon ? 'black' : 'white', fontSize:23}}></MaterialCommunityIcons>
                        </TouchableOpacity>
                        )}

                    </View>
                </ScrollView> : ''}
                {!players[0] ? "" : <Text style={styles.h2}> Players </Text>}
                {players[0] ? (<DisplayNewUsers players={players} setAddingPlayer={setAddingPlayer} displayName={displayName}></DisplayNewUsers>) : ("")}
                {addingPlayer ? <Text style={{...styles.h2, marginBottom:0}}>Add New Player</Text>: ''}
                {addingPlayer ? <View style={styles.addContainer}>
                    <TextInput
                        placeholder="Player Name"
                        placeholderTextColor={'rgba(256,256,256,0.5)'}
                        value={newName}
                        onChangeText={setNewName}
                        style={{...styles.input, width:280, borderTopLeftRadius:5, borderBottomLeftRadius:5, borderTopRightRadius:0, borderBottomRightRadius:0}}
                    />
                    <TouchableOpacity onPress={handleAddPlayer} style={styles.addPlayerButton}>
                        <Text style={styles.addButton}><MaterialCommunityIcons name={'account-plus'} style={{color:'black', fontSize:18}}></MaterialCommunityIcons></Text>
                    </TouchableOpacity>
                </View> : ''}
            </InputScrollView>
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
        fontWeight: "600",
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 5,
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
        color: "#8983C4",
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
        width: 320,
        borderRadius: 5,
        height: 42,
        marginVertical:5
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
        marginBottom: 10,
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
        marginTop: 5,
        marginBottom:200
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
        marginVertical:5
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
        marginVertical:5
    },
    addPlayerButton:{
        backgroundColor:'white', 
        width:40, 
        height:40, 
        borderTopRightRadius:5, 
        borderBottomRightRadius:5,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:5
    }

});
