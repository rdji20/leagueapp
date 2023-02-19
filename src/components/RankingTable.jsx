import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { DataTable} from 'react-native-paper'
import { firstName } from "../utils/helperFunctions";

const LeagueStandings = ({users, userId}) => {

    const TableRows = () => {
        return (
            users.map((user, index) => 
                <DataTable.Row key={index}style={styles.row}>
                    <DataTable.Cell style={styles.cell}><Text style={user.userId === userId ? styles.champ : styles.score}>{index + 1}</Text></DataTable.Cell>
                    <DataTable.Cell style={styles.cell}><Text style={user.userId === userId ? styles.champ : styles.score}>{firstName(user.displayName)}</Text></DataTable.Cell>
                    <DataTable.Cell style={styles.cell}><Text style={user.userId === userId ? styles.champ : styles.score}>{`${user.wins}-${user.loses}`}</Text></DataTable.Cell>
                    <DataTable.Cell style={styles.cell}><Text style={user.userId === userId ? styles.champ : styles.score}>{+user.wins + +user.loses != 0 ? Math.round((user.wins/(+user.loses + +user.wins)) * 100)/100: 0}</Text></DataTable.Cell>
                </DataTable.Row>
            )
        )
    }
    return (
        <View style={styles.container}>
            <DataTable style={{marginTop:0}}>
                <DataTable.Header>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Rank</Text></DataTable.Title>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Name</Text></DataTable.Title>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Record</Text></DataTable.Title>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Win %</Text></DataTable.Title>
                </DataTable.Header>

                <TableRows/>

            </DataTable>

        </View>
    )
}

export default LeagueStandings

const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      padding: 15,
      color: '#DCDCDC',
      fontWeight:'700',
      backgroundColor: '#DBFF00',
      borderRadius: '5px',
      alignItems: 'center'
    },
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
    cell: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'baseline',
        color: 'white',
    },
    title: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'baseline',
        color: 'white',
        fontWeight: '500'
    },

    status:{
        color:'white',
        fontSize: 14,
        fontWeight: '500'
    },

    rank: {
        color:'#94a1b2',
        fontWeight:'300',
        textAlign:'center'
    },
    name: {
        color: '#94a1b2',
        fontWeight:'400'
    },
    record: {
        color: '#94a1b2',
        fontWeight:'400'
    },
    score: {
        color: '#94a1b2',
        fontWeight:'400'
    },
    row: {
        borderBottomColor: 'transparent'
    },
    container: {
        marginHorizontal:15,
        padding:10,
        marginTop: 0,
        marginBottom:30,
        marginTop:10,
        borderWidth:2,
        backgroundColor:'#242629',
        borderRadius:8,
        shadowColor:"black",
        shadowOpacity:1,
        shadowRadius:1,
        shadowOffset: {width: 10,height: 10},
        width:355
    },
    champ:{
        color: 'white',
        fontWeight:'500',
    }
  });