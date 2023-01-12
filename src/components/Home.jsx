import React, { useEffect, useRef, useState, useContext } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    ScrollView,
    Pressable,
} from "react-native";
import { DataTable } from "react-native-paper";
import Table from "./DataTable";
import LeagueStandings from "./RankingTable";

export const Home = () => {
    return (
        <View style={styles.view}>
            <Text> Hello World! Pene Africano</Text>
            <LeagueStandings>
                
            </LeagueStandings>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        width: '100%'
    }
});
