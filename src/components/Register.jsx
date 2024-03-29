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
    Alert,
} from "react-native";

export default function RegisterForm({
    email,
    setEmail,
    password,
    setPassword,
    passwordCheck,
    setPasswordCheck,
    handleSignUp,
    setLoginScreen,
    newUserName,
    setNewUserName,
}) {

    const clearInputs = () => {
        setEmail('')
        setNewUserName('')
        setPassword('')
        setPasswordCheck('')
    }



    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={styles.title}>Rankd</Text>
            <Text style={styles.text}> Sign up with your email</Text>
            <TextInput
                keyboardType="email-address"
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="rgba(256,256,256,0.5)"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Display Name"
                placeholderTextColor="rgba(256,256,256,0.5)"
                value={newUserName}
                onChangeText={setNewUserName}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(256,256,256,0.5)"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="rgba(256,256,256,0.5)"
                value={passwordCheck}
                onChangeText={setPasswordCheck}
                secureTextEntry
                style={styles.input}
            />

            <TouchableOpacity
                title="Sign Up"
                onPress={() => {
                    if (password == passwordCheck) {
                        if (password.length >= 6) {
                            handleSignUp()
                            clearInputs()
                        } else {
                            Alert.alert(
                                "Short Password",
                                "Password must be 6 characters or longer"
                            );
                        }
                    } else {
                        Alert.alert(
                            "Incorrect password",
                            "Password doesn't match."
                        );
                    }
                }}
                style={styles.login}
            >
                <Text style={styles.loginText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Login"
                onPress={() => {
                    setPassword("");
                    setEmail("");
                    setNewUserName("");
                    setLoginScreen(true);
                }}
                style={styles.register}
            >
                <Text style={styles.alreadyText}>
                    {" "}
                    Already Have an account?
                </Text>
                <Text style={styles.registerText}> Sign in</Text>
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
        borderRadius: 8,
        height: 40,
        marginVertical: 20,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DBFF00",
    },
    register: {
        borderRadius: 10,
        height: 40,
        marginTop: 5,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },

    loginText: {
        color: "#8983C4",
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
    title: {
        fontSize: 80,
        color: "white",
        fontFamily: "AppleSDGothicNeo-UltraLight",
        paddingBottom: 20,
    },
});
