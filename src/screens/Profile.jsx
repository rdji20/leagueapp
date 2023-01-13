import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export const Profile = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>Hellp Profile</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
        </SafeAreaView>
    );
};

export default Profile;
