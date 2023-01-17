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
    TextInput,
} from "react-native";
import DisplayNewUsers from "./addUserList";

export function CreateLeague({ navigation }) {
    const [name, setName] = useState("");
    const [size, setSize] = useState(0);
    const [players, setPlayers] = useState([]);
    const [newName, setNewName] = useState("");
    const [uri, setUri] =useState('')

    function handleCreate() {
        const league = {
            name,
            uri,
            size,
            matches: [],
            players,
        };
        console.log(league);
        //redirect
    }

    function handleAddPlayer() {
        console.log(newName);
        if (newName) {
            console.log(players);
            const newPlayers = [...players];
            newPlayers.unshift({ name: newName });
            setPlayers(newPlayers);
            setNewName("");
        }
    }

    return (
        <View style={styles.createContainer}>
            <View style={styles.container}>
                <Image
                    style={styles.itemPhoto}

                />
                <Text> {uri}</Text>
            </View>
            <Text style={styles.h2}>League Name</Text>
            <TextInput
                placeholder="e.g. Fifa League"
                placeholderTextColor="rgba(256, 256, 256, 0.5)"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            {!players[0] ? (
                ''
            ) : (
                <Text style={styles.h2}> League Players </Text>
            )}
            {players[0] ? (
                <DisplayNewUsers players={players}></DisplayNewUsers>
            ) : (
                ""
            )}
            <View style={styles.addContainer}>
                <TextInput
                    placeholder="Add Player"
                    placeholderTextColor="#8983C4"
                    value={newName}
                    onChangeText={setNewName}
                    style={styles.inputPlayers}
                />
                <TouchableOpacity onPress={handleAddPlayer}>
                    <Text style={styles.addButton}> + </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.buttonText2}> Cancel </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={handleCreate}>
                    <Text style={styles.buttonText1}> Done </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        width: "100%",
    },
    h2: {
        color: "rgba(256,256,256,1)",
        fontSize: "18 ",
        fontWeight: "600",
        marginTop: 30,
        marginBottom: 5,
        marginHorizontal: 5,
    },
    h1: {
        fontSize: 46,
        fontWeight: "800",
        color: "white",
        height: 40,
        margin: 10,
        padding: 0,
        height: 60,
    },
    button1: {
        marginTop: 20,
        marginBottom: 10,
        padding: 15,
        color: "#DCDCDC",

        borderRadius: "5px",
        alignItems: "center",
        flex: 1,
    },
    buttonText1: {
        fontWeight: "700",
        color: "white",
        fontSize: 16,
    },
    buttonText2: {
        fontWeight: "700",
        color: "#8983C4",
        fontSize: 16,
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 200,
    },
    input: {
        placeHolderTextColor: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 5,
        color: "white",
        width: 278,
        height: 61,
        borderRadius: 5,
        height: 40,
    },
    button2: {
        borderRadius: 10,
        height: 40,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    itemPhoto: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderColor: "rgba(256, 256, 256, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    container: {
        alignItems: "center",
        marginBottom: 10,
    },
    createContainer: {
        marginTop: 70,
        marginHorizontal: 50,
    },
    inputPlayers: {
        backgroundColor: "transparent",
        fontSize: 24,
        fontWeight: "600",
        color: "white",
    },
    addButton: {
        color: "#DBFF00",
        fontSize: 46,
    },
    addContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    labels: {
        color: "white",
        fontSize: 16,
    },
});
