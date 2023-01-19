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

    const Item = ({title}) => (
        <View style={styles.item}>
            <Text>{title}</Text>
        </View>
    )

    return (
        <View style={styles.view}>
            <FlatList 
                data={DATA} 
                renderItem={({item}) => <RecentMatches title={item.title}></RecentMatches>}
                horizontal={true}
            >
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
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

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];