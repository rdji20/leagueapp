import React, { useEffect, useRef, useState, useContext } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const Description = ({numPlayers, numMatches, topPlayer}) => {
   
    return (
        <View style={styles.descriptionContainer}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Players</Text>
                <Text style={styles.infoValue}>{numPlayers}</Text>
            </View>
            <View style={{...styles.infoContainer}}>
                <Text style={{...styles.infoText}}>Champion</Text>
                <Text style={{...styles.infoValue}}>{topPlayer}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Matches</Text>
                <Text style={styles.infoValue}>{numMatches}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    descriptionContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        borderBottomColor:'#94a1b2',
        paddingBottom:15,
        borderBottomWidth:1
    },
    infoContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        marginHorizontal:20,
        padding:10,
    },
    infoText:{
        color:'#94a1b2',
        fontWeight:'400',
        fontSize:12
    },
    infoValue:{
        color:'white',
        fontWeight:'600',
        fontSize:20

    }
})
