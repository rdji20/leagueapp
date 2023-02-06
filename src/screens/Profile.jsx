import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet} from "react-native";

export const Profile = ({ navigation, route }) => {
    const { prop1, prop2, logout, displayName} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.h1}>Hi, {displayName.split(' ')[0]}</Text>
                <View style={styles.card}>
                    <Text style={styles.subtitle}>Email:</Text>
                    <Text style={styles.h2}>{prop1.email}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.subtitle}>Display Name:</Text>
                    <Text style={styles.h2}>{displayName}</Text>
                </View>

                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate("Home")}
                />
                <Button title="Logout" onPress={logout.handleLogout} />
            </View>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    h1:{
        color:'white',
        fontSize:40,
        textAlign:'center'
    },
    h2: {
        color: 'white',
        fontSize: 14,
        textAlign: 'left'
    },
    h3: {
        color: 'white',
        fontSize: 14,
        textAlign:'left'
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    },
    card: {
        backgroundColor: '#242629',
        marginVertical:10,
        marginHorizontal:30,
        borderRadius: 10,
        padding:12,
    },
    subtitle:{
        fontSize: 12,
        color: '#94a1b2'
    }
})
