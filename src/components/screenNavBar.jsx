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
import { styles } from "./createLeague";

export const NavBar = ({navigation, backButton, title, actionButton, handleAction, validAction}) => {

    return(
        <View style={{...styles.buttonContainer, marginTop:20}}>
            <TouchableOpacity
                style={styles.button2}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.buttonText2}>{backButton}</Text>
            </TouchableOpacity>
            <Text style={styles.h1}>{title}</Text>
            <TouchableOpacity style={styles.button1} onPress={() => {
                if(validAction()){
                    handleAction()
                }
                }}>
                <Text style={!validAction() ? styles.buttonText1 : styles.buttonTextValid}>{actionButton}</Text>
            </TouchableOpacity>
        </View>)
}

