import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet} from "react-native";

export const Profile = ({ navigation, route }) => {
    const { prop1, prop2, logout} = route.params;
    console.log(prop1)
    console.log(logout.handleLogout)
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
    h2: {
        color: 'white',
        fontSize: 16
    },
    h3: {
        color: 'white',
        fontSize: 14
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 100
    }
})
