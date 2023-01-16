import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet} from "react-native";

export const Profile = ({ navigation, route }) => {
    const { prop1, prop2 } = route.params;
    console.log(prop1);
    console.log({prop1})
    return (
        <SafeAreaView>
            <Text style={styles.h2}>Hello Profile</Text>
            <Text style={styles.h2}> Welcome, {prop1.email}</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
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
    }
})
