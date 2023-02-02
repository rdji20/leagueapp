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
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DefaultImage } from "../components/defaultImage";
import { NavBar } from "../components/screenNavBar";
import {v4 as uuidv4} from 'uuid';

export const AddNewPlayer = ({ navigation, userProp}) => {
    const [displayName, setDisplayName] = useState('')
    const [color, setColor] = useState(false)

    const validName = () => {
        return displayName.split('').find((val) => val != ' ' &&  val != '')
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <NavBar navigation={navigation} backButton={'Back'} title='New Player' actionButton='Add Player' validAction={validName} handleAction={() => console.log('uid: ', uuidv4())}></NavBar>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <MaterialCommunityIcons name='account-multiple-plus' style={{color:'white', fontSize:60, marginTop:20}}></MaterialCommunityIcons>
                    <View style={styles.inputContainer}>
                        <Text style={styles.h2}> Player Name </Text>
                        <View>
                            <TextInput 
                                style={styles.input}
                                onChangeText={setDisplayName}
                                placeholder='e.g. Mirna Jerlach'
                                > 
                                
                            </TextInput>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        alignItems:'center'
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
    inputContainer:{
        justifyContent:'flex-start',
        alignItems:'baseline',
        marginTop:30
    },
    h2: {
        fontSize:18,
        color:'#fffffe',
        fontWeight:'500',
        marginBottom:5
    }
});
