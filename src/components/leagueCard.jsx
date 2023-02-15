import { BlurView } from "expo-blur";
import React, { useEffect, useRef, useState, useContext } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Image} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavBar } from "./screenNavBar";

//The League Card 

export const LeagueCard = ({leagueInfo, handleSelect}) => {

    const dummyInfo = {
            name:'Beerpong',
            description: 'In this game, fuck the bitches and them hoes. Fuck them bitches cameltoes, fuck them rings and them joes.',
        }
    const CategoryContainer = ({rule}) => {
        return (
            <View style={styles.category}>
                <Text style={styles.categoryTitle}>{rule.title}</Text>
                <Text style={styles.categoryText}>{rule.value}</Text>
            </View>
        )
    }



    return (
        <View style={styles.card}>
            {leagueInfo.available ? '' :
            <BlurView tint="dark" style={styles.blurView} intensity={40}>
                <MaterialCommunityIcons name='lock' style={{color:'white', fontSize:30}}></MaterialCommunityIcons>
                <Text style={{color:'white', fontSize:16}}>Available For Premium Users</Text>
                <Text style={{color:'#7f5af0', fontSize:16}}>Learn More</Text>
            </BlurView>
            }
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{leagueInfo.title}</Text>
                    <Text style={styles.description}>{leagueInfo.description}</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row',justifyContent:'space-around', alignItems:'center', width:'100%', height:'50%'}}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {handleSelect(leagueInfo.title)}}
                        >
                        <Text style={{color:'white', fontWeight:'500'}}>
                            Select
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
        
    )
}

StyleSheet

const styles = StyleSheet.create({
    card:{
        shadowColor:"black",
        shadowOpacity:1,
        shadowRadius:1,
        shadowOffset: {width: 10,height: 10},
        marginHorizontal:25,
        height:300

    },
    blurView:{
        flex:1, 
        position:'absolute', 
        zIndex:1, 
        top:5,
        bottom:5,
        right:5,
        left:5,
        borderRadius:'10%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        height:'60%'
    },
    container: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'baseline',
        alignItems:'flex-start',
        borderColor:'black',
        backgroundColor:'#242629',
        borderWidth:2,
        height:300,
        width:300,
        borderRadius:'10%',
        padding:20,
        overflow:'hidden',        
    },
    title:{
        color:'white',
        fontSize:24,
        fontWeight:'600',
        marginTop:10,
        marginLeft:10,
        textAlign:'center'
    },
    image:{
        width:'100%',
        height:'60%',
    },
    description:{
        color:'#94a1b2',
        fontSize:16,
        marginTop:10,
        marginLeft:10,
        textAlign:'center'
    },
    category:{
        marginLeft:10,
        marginTop:10

    },
    button:{
        backgroundColor:'#7f5af0',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:200,
        height:40,
        paddingHorizontal:20,
        borderRadius:6
    },
    buttonSecondary:{
        backgroundColor:'#94a1b2',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:120,
        height:40,
        paddingHorizontal:20,
        borderRadius:6
    },
    categoryTitle:{
        color:'#72757e',
        fontSize:10,
    },
    categoryText:{
        color:'white',
        fontWeight:'500',
        fontSize:14
    },
    })