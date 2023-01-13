import React, { useEffect, useRef, useState, useContext } from "react";
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
    TextInput
} from "react-native";
export function CreateLeague(){

    const [uri, setUri] = useState('')
    const [name, setName] = useState('')
    const [size, setSize] = useState(0)

    function handleCreate(){
        const league = {
            name,
            uri,
            size,
            matches:[]
        }
        console.log(league)
        //redirect
    }

    return (
        <View>
            <View style={styles.container}>
                <Image 
                    style={styles.itemPhoto} 
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2K_Sports_Logo.svg/1200px-2K_Sports_Logo.svg.png'
                    }}
                />
                <Text> {uri}</Text>
            </View>

            <TextInput
                placeholder="Name"
                placeholderTextColor='rgba(256, 256, 256, 0.5)'
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="League Size"
                placeholderTextColor='rgba(256, 256, 256, 0.5)'
                value={size}
                onChangeText={setSize}
                style={styles.input}
            />
            <TextInput
                placeholder="League Icon URL"
                placeholderTextColor='rgba(256, 256, 256, 0.5)'
                value={uri}
                onChangeText={setUri}
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleCreate}>
                    <Text style={styles.buttonText}> Create League </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.register}>
                    <Text style={styles.buttonText}> Cancel </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        width: '100%',
    },
    h2: {
        color: 'rgba(256,256,256,0.5)',
        fontSize: '20',
        fontWeight: '600',
        marginBottom: 2,
        marginTop: 5,
        marginHorizontal:10,
    },
    h1: {
        fontSize:46,
        fontWeight:'800',
        color: 'white',
        height: 40,
        margin:10,
        padding: 0,
        height:60
    },
    button: {
        marginTop: 20,
        marginBottom:10,
        padding: 15,
        color: '#DCDCDC',
        backgroundColor: '#DBFF00',
        borderRadius: '5px',
        alignItems: 'center',
        width: 300
      },
      buttonText:{
          fontWeight: '700'
      },
    buttonContainer: {
        alignItems: 'center'
    },
    input:{
        placeHolderTextColor:'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        color: 'white',
        width: 278,
        height:61,
        borderRadius:5,
        
        height:40
    },
    register: {
        borderRadius: 10,
        borderWidth: 0.5,
        height: 40,
        marginTop: 10,
        width: 200,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'white'
    },
    itemPhoto: {
        width: 100, 
        height: 100, 
        borderRadius: 100/ 2,
        borderColor:'rgba(256, 256, 256, 0.5)',
        borderWidth:1,
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
    container: {
        alignItems: 'center',
        marginBottom: 10
    }

});
