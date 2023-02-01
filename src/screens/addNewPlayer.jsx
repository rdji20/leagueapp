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
    InputText
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DefaultImage } from "../components/defaultImage";

export const AddNewPlayer = ({ navigation, userProp}) => {
    const [displayName, setDisplayName] = useState('')

    return (
        <View>
            <Text>Hello</Text>
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
        marginHorizontal:15,
        padding:10,
        marginBottom:50,
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
      noMatches:{
          fontSize:20,
          fontWeight:'600',
          color:'#fffffe',
          textAlign:'left',
      },
      noMatchesDescription:{
          fontSize:14,
          fontWeight:'400',
          color:'#94a1b2',
          textAlign:'left',
      },
      matchContainer:{
        height:130,
        borderRadius:8,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        width:355,
        borderBottomWidth:0.5, 
        borderWidth:2,
        backgroundColor:'#242629',
        borderRadius:8,
        shadowColor:"black",
        shadowOpacity:0.5,
        shadowRadius:1,
        shadowOffset: {width: 5,height: 8},
        marginVertical:10,
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
});
