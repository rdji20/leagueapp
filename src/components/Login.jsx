import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

export default function LoginForm({
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    setLoginScreen,
}) {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={styles.text}>Sign in</Text>
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="rgba(256, 256, 256, 0.5)"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(256, 256, 256, 0.5)"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity
                title="Sign In"
                onPress={handleLogin}
                style={styles.login}
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                title="or Sign Up"
                onPress={() => {
                    setEmail("");
                    setPassword("");
                    setLoginScreen(false);
                }}
                style={styles.register}
            >
                <Text style={styles.alreadyText}>
                    {" "}
                    Don't have an account yet?
                </Text>
                <Text style={styles.registerText}>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        placeHolderTextColor: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        color: "white",
        width: 278,
        height: 61,
        borderRadius: 5,

        height: 40,
    },

    login: {
        borderRadius: 10,
        height: 40,
        marginTop: 10,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DBFF00",
    },
    register: {
        borderRadius: 10,
        height: 40,
        marginTop: 10,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },

    loginText: {
        color: "black",
        fontSize: 16,
        fontWeight: "600",
    },
    registerText: {
        color: "#8983C4",
        fontSize: 12,
    },

    alreadyText: {
        color: "white",
        fontSize: 12,
    },

    text: {
        color: "white",
        fontSize: 22,
        marginBottom: 15,
    },
    h1: {
        fontSize: 50,
        fontWeight: "700",
        color: "#8983C4",
        marginBottom: 80,
    },
});
