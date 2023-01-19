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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RecentMatches } from "./recentMatch";

export const RecentMatchesList = ({ navigation, userProp }) => {

    const MatchesList = () => {
        return (matches.map(function(match){return <RecentMatches key={match.matchId} uris={match.uris} players={match.players} score={match.score} teams={match.teams} />}))
    }

    return (
        <View style={styles.view}>
            <MatchesList></MatchesList>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:0,
        paddingBottom:10,
    },
    h3: {
        color: "rgba(256,256,256,0.25)",
        fontSize: 14,
        fontWeight: "600",
        marginHorizontal: 10,
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
        justifyContent:'baseline',
        alignItems: 'baseline',
        marginBottom:100,
        paddingBottom:10
    },
    right:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'baseline',
        alignItems: 'flex-end',
        marginBottom:100,
    },
    itemPhoto: {
        width: 60, 
        height: 60, 
        borderRadius: 60/ 2,
        borderColor:'rgba(256, 256, 256, 0.5)',
        borderWidth:1
        
      },
});

const matches = [
    {
      uris: ['https://media-exp1.licdn.com/dms/image/C5603AQHRX8cZTM9RQw/profile-displayphoto-shrink_200_200/0/1611796969932?e=1674691200&v=beta&t=_z7G_Mzv9BeCVEmKw5c_owLyULXYNT0Y-OtGq3Fa8N0',
      'https://media.licdn.com/dms/image/C5603AQFsHOwly1yfKA/profile-displayphoto-shrink_800_800/0/1540257823299?e=1678924800&v=beta&t=tYXL893KTMmflebzL8lVI5j_yCZO-mUKc56FNgZ_83I'],
      players: ['Roberto', 'Octavio'],
      score: ['46', '36'],
      teams: ['Portland', 'Clippers'],
      matchId:'askjdhaskjd'

    },
    {
      uris: ['https://pbs.twimg.com/profile_images/1420610977683419137/LlWNgDux_400x400.jpg', 'https://media.licdn.com/dms/image/C5603AQFI24okpCiJRg/profile-displayphoto-shrink_800_800/0/1618847906137?e=1678924800&v=beta&t=I1ADXlyb_SBqHe3oywa2CJTYeSum591wVi9aEj1vvIA'],
      players: ['Meo', 'Claudio'],
      score: ['30', '12'],
      teams: ['Golden State', 'Philadelphia'],
      matchId:'kjadhlkasj'

    },
    {
      uris: ['https://pbs.twimg.com/profile_images/1420610977683419137/LlWNgDux_400x400.jpg','https://media.licdn.com/dms/image/C5603AQFsHOwly1yfKA/profile-displayphoto-shrink_800_800/0/1540257823299?e=1678924800&v=beta&t=tYXL893KTMmflebzL8lVI5j_yCZO-mUKc56FNgZ_83I'],
      players: ['Meo', 'Roberto'],
      score: ['250', '20'],
      teams: ['Timberwolves', 'Houston'],
      matchId: 'lkasjaiejoj'

    },

  ];