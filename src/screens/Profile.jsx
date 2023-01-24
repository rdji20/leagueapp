import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet} from "react-native";

export const Profile = ({ navigation, route }) => {
    const { prop1, prop2, logout} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.h2}>Hello Profile</Text>
                <Text style={styles.h2}> UID, {prop1.uid}</Text>
                <Text style={styles.h2}> Mail, {prop1.email}</Text>
                <Text style={styles.h2}> Display Name:, {prop1.displayName}</Text>
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
        color:'white'
    },
    h2: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    h3: {
        color: 'white',
        fontSize: 14,
        textAlign:'right'
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    }
})
