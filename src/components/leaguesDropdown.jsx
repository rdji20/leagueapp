import React, { useEffect, useRef, useState, useContext } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { DefaultImage } from "../components/defaultImage";
import { NavBar } from "../components/screenNavBar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const DropdownList = ({leagueNames, handleSelectLeague}) => {
    const [selectedLeague, setSelectedLeague] = useState('')
    const [selecting, setSelecting] = useState(false)
    const Item = ({item}) => (
        <TouchableOpacity
            style={{
                backgroundColor:item.key === selectedLeague ? 'white' : 'transparent',
                display:'flex',
                flexDirection:'row',
                paddingVertical:10,
            }
            }
            onPress={() => {
                handleSelectLeague(item.key)
                setSelectedLeague(item.key)
                setSelecting(false)
            }
            }
        >
            <View style={{backgroundColor:'transparent', alignItems:'center', justifyContent:'flex-start', marginRight:10, marginHorizontal:15}}>
                <MaterialCommunityIcons name={item.icon} style={{fontSize: 20,color: selectedLeague === item.key ? 'black' :'white'}}/>
            </View>
            <Text style={{fontSize:12, fontWeight:'500', color:item.key === selectedLeague ? 'black' : 'white'}}>{item.value}</Text>
        </TouchableOpacity>
    )
    return (
        <View style={styles.listContainer}>
            <TouchableOpacity
                style={{borderBottomWidth:1, borderBottomColor:'#94a1b2'}}
                onPress={() => {
                    setSelecting(!selecting)
                }}
            >
                <Text style={selecting ? styles.dropdownButtonSelecting : styles.dropdownButton}> My Leagues <MaterialCommunityIcons name={selecting ? 'chevron-up' : 'chevron-down'} style={{fontSize:12}}/></Text>
            </TouchableOpacity>
            <View style={{...styles.listStyles, borderWidth: selecting ? 1 : 0}}>
                {selecting ? <FlatList
                    data = {leagueNames}
                    renderItem = {({item}) => <Item item={item}></Item>}
                >

                </FlatList> : ''}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    h1:{
        color:'white',
        fontSize:32,
        textAlign:'center',
        marginBottom:20,
        marginTop:10
    },
    h2: {
        color: 'black',
        fontSize: 15,
        fontWeight:'500',
        textAlign: 'left',
        marginTop:2
    },
    h3: {
        color: 'white',
        fontSize: 14,
        textAlign:'left'
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'baseline',
        alignContent: 'center',
        flex: 1
    },
    card: {
        backgroundColor: '#242629',
        marginVertical:10,
        marginHorizontal:30,
        borderRadius: 10,
        padding:12,
    },
    subtitle:{
        fontSize: 12,
        color: '#94a1b2'
    },
    listContainer:{
        marginHorizontal:0,
        position:'absolute',
        zIndex:100,
        left:0,
        right:0,
        top:-35,
    },
    dropdownButton:{
        textAlign:'center',
        color:'#fffffe',
        fontWeight:'500',
        marginBottom:10,
        fontSize:18,
    },
    dropdownButtonSelecting:{
        textAlign:'center',
        color:'#fffffe',
        fontWeight:'600',
        marginBottom:10,
        fontSize:18,
    },
    listStyles:{
        backgroundColor:'#16161a',
        borderWidth:3,
        borderColor:'black',
        borderTopColor:'white',
        shadowColor:"black",
        shadowOpacity:10,
        shadowRadius:30,
        shadowOffset: {width: 0,height: 0},
        maxHeight:300
    }
})
