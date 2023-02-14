import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet} from "react-native";
import { DefaultImage } from "../components/defaultImage";
import { NavBar } from "../components/screenNavBar";

export const Profile = ({ navigation, route }) => {
    const { prop1, prop2, logout, displayName} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <NavBar navigation={navigation} backButton='Home' title='Profile' actionButton='' validAction={() => {return true}} handleAction={function (){}}></NavBar>
            <View style={styles.container}>
                <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <DefaultImage size={'Large'} displayName={displayName} color='#7f5af0'></DefaultImage>
                </View>
                <Text style={styles.h1}>{displayName}</Text>
                <View style={styles.card}>
                    <Text style={styles.subtitle}>Email</Text>
                    <Text style={styles.h2}>{prop1.email}</Text>
                </View>
                <View style={{...styles.card, marginBottom:300}}>
                    <Text style={styles.subtitle}>Display Name</Text>
                    <Text style={styles.h2}>{displayName}</Text>
                </View>
                <Button color='#7f5af0' title="Logout" onPress={logout.handleLogout} />
            </View>

        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    h1:{
        color:'white',
        fontSize:32,
        textAlign:'center',
        marginBottom:20,
        marginTop:10
    },
    h2: {
        color: 'white',
        fontSize: 15,
        fontWeight:'500',
        textAlign: 'left',
        marginTop:2
    },
    h3: {
        color: 'white',
        fontSize: 14,
        textAlign:'left'
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'baseline',
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
