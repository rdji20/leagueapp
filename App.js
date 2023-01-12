import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    SafeAreaView,
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

import { Home } from "./src/components/Home";

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

    // useEffect(() => {
    //     signInWithEmailAndPassword("email@uw.edu", "password")
    //         .then((user) => {
    //             console.log(user);
    //             setAuthenticated(true);
    //             console.log(isAuthenticated);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // });

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
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

    return (
        // <SafeAreaView>
        //     <TextInput
        //         placeholder="Email"
        //         value={email}
        //         onChangeText={setEmail}
        //     />
        //     <TextInput
        //         placeholder="Password"
        //         value={password}
        //         onChangeText={setPassword}
        //         secureTextEntry
        //     />
        //     <Button title="Sign Up" onPress={handleSignUp} />
        //     <Button title="Sign In" onPress={handleSignIn} />
        //     {error && <Text>{error}</Text>}
        // </SafeAreaView>
        <View style={styles.container}>
            {isLoggedIn ? (
                <>
                    <Home />
                    <Button title="Logout" onPress={handleLogout} />
                </>
            ) : (
                <>
                    <Text>Please log in</Text>
                    <SafeAreaView>
                        <TextInput
                            placeholder="Email"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <Button title="Log In" onPress={handleLogin} />
                        <Button title="Sign Up" onPress={handleSignUp} />
                        {error && <Text>{error}</Text>}
                    </SafeAreaView>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
