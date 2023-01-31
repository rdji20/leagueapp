import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBNr3BF-AxdB5HcUIZ9xj2yxcBYHo1kwd0",
    authDomain: "ntf-app-36f1e.firebaseapp.com",
    projectId: "ntf-app-36f1e",
    storageBucket: "ntf-app-36f1e.appspot.com",
    messagingSenderId: "608923799855",
    appId: "1:608923799855:web:740b0906861387e90811da",
    measurementId: "G-9HWLSYE15H",
};

import { CreateLeague } from "./src/components/createLeague";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "./src/screens/Profile";
import RegisterForm from "./src/components/Register";
import LoginForm from "./src/components/Login";
import axios from "axios";
import { Home } from "./src/screens/Home";
import * as RequestManager from "./src/utils/RequestManager";
import { AddScoreScreen } from "./src/screens/AddScore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [loginScreen, setLoginScreen] = useState(true); //Switches between login and signup
    const [newUserName, setNewUserName] = useState(""); //Switches between login and signup

    /**
     * Signs new user up with firebase auth and adds user to firebase using
     * a call to Usercreation api function.
     */
     const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const thisUser = userCredential.user;
                setUser(userCredential.user);
                console.log("Test before rerquestManger", newUserName);
                RequestManager.userCreation(thisUser, newUserName);
                // ...
            }).then(() => {
                setIsLoggedIn(true);
            }) 
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                console.log(errorCode);
                // ..
            });
    };

    /**
     * Logs in new user up with firebase auth.
     */
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setIsLoggedIn(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const logOnForm = () => {
        return loginScreen ? (
            <>
                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    setLoginScreen={setLoginScreen}
                ></LoginForm>
            </>
        ) : (
            <>
                <RegisterForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSignUp={handleSignUp}
                    setLoginScreen={setLoginScreen}
                    setNewUserName={setNewUserName}
                    newUserName={newUserName}
                ></RegisterForm>
            </>
        );
    };
    const Stack = createStackNavigator();

    return (
        <View style={styles.container}>
            {isLoggedIn ? (
                <>
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen
                                options={{
                                    cardStyle: {
                                        backgroundColor: "#16161a",
                                    },
                                    title: "Home",
                                }}
                                name="Home"
                                component={Home}
                                initialParams={{
                                    user: user,
                                }}
                            />
                            <Stack.Screen
                                options={{
                                    cardStyle: {
                                        backgroundColor: "#16161a",
                                    },
                                    title: "NewLeague",
                                }}
                                name="NewLeague"
                                component={CreateLeague}
                                initialParams={{
                                    prop1: user,
                                    prop2: "another value",
                                }}
                            />
                            <Stack.Screen
                                options={{
                                    cardStyle: {
                                        backgroundColor: "#16161a",
                                    },
                                    title: "Profile ",
                                }}
                                name="Profile"
                                component={Profile}
                                initialParams={{
                                    prop1: user,
                                    prop2: "another value",
                                    logout: { handleLogout },
                                }}
                            />
                            <Stack.Screen
                                options={{
                                    cardStyle: {
                                        backgroundColor: "#16161a",
                                    },
                                    title: "Profile ",
                                }}
                                name="profile"
                                component={Profile}
                                initialParams={{
                                    prop1: user,
                                    prop2: "another value",
                                }}
                            />
                            <Stack.Screen
                                options={{
                                    cardStyle: {
                                        backgroundColor: "#16161a",
                                    },
                                    title: "AddScore",
                                }}
                                name="AddScore"
                                component={AddScoreScreen}
                                initialParams={{
                                    prop1: user,
                                    prop2: "another value",
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </>
            ) : (
                logOnForm()
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B1C1E",
    },
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
        borderWidth: 0.5,
        borderColor: "#DBFF00",
        height: 40,
        marginTop: 10,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    loginText: {
        color: "black",
        fontSize: 16,
        fontWeight: "600",
    },
    registerText: {
        color: "black",
        fontSize: 16,
        fontWeight: "600",
    },

    text: {
        color: "white",
    },
});
