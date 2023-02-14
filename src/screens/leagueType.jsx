import React, { useEffect, useRef, useState, useContext } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { DefaultImage } from "../components/defaultImage";
import { NavBar } from "../components/screenNavBar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { LeagueCard } from "../components/leagueCard";
import { leagueTypes } from "../utils/leagueDescriptions";


export const LeagueType = ({navigation,route}) => {
    const {uId, displayName, handleTryAgain, setFetched, setNewLeagueCreated} = route.params;
    const [leagueType, setLeagueType] = useState('')
    
    const navigateCreate  = (leagueType) => {
        navigation.navigate('NewLeague', {uId, displayName, handleTryAgain, setFetched ,leagueType, setNewLeagueCreated})
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <NavBar navigation={navigation} backButton='Back' title='League Type' actionButton='' validAction={() => {return true}} handleAction={function (){}}></NavBar>
            <View style={{marginTop:100}}>
                <Text style={{color:'white', fontSize:28, marginHorizontal:20, fontWeight:'600', marginBottom:5}}>Select Your League Type</Text>
                <Text style={{color:'#94a1b2', fontSize:14, marginHorizontal:20, overflow:'hidden', marginBottom:40}}>This will determine the way the scoring will work in your league. </Text>
                <View style={styles.container}>
                    <View style={{height:400}}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={leagueTypes}
                            renderItem={({item}) => <LeagueCard leagueInfo={item} handleSelect={navigateCreate}/>}
                            horizontal
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
        
    )
}

StyleSheet

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center'
    }


    }
)