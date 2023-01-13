import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export const Profile = ({ navigation, route }) => {
    const { prop1, prop2 } = route.params;
    console.log(prop1);
    return (
        <SafeAreaView>
            <Text>Hello Profile</Text>
            <Text> {prop1.uid}</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
        </SafeAreaView>
    );
};

export default Profile;
