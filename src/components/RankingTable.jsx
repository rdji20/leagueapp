import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { DataTable} from 'react-native-paper'

const LeagueStandings = ({users}) => {
    const TableRows = () => {
        console.log('Pene')
        console.log(users.map((val) => val))
        return (
            users.map((user, index) => 
                <DataTable.Row key={index}style={styles.row}>
                    <DataTable.Cell style={styles.cell}><Text style={styles.rank}>{index + 1}</Text></DataTable.Cell>
                    <DataTable.Cell style={styles.cell}><Text style={styles.name}>{user.displayName.split(' ')[0]}</Text></DataTable.Cell>
                    <DataTable.Cell style={styles.cell}><Text style={styles.record}>{`${user.wins}-${user.loses}`}</Text></DataTable.Cell>
                    <DataTable.Cell style={styles.cell}><Text style={styles.score}>{user.loses}</Text></DataTable.Cell>
                </DataTable.Row>
            )

        )
    }


    return (
        <View style={styles.container}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Rank</Text></DataTable.Title>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Name</Text></DataTable.Title>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Record</Text></DataTable.Title>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Win Pct</Text></DataTable.Title>
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
        color: 'white'
    },
    title: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'baseline',
        color: 'white',
        fontWeight: '700'
    },

    status:{
        color:'white',
        fontSize: 14,
        fontWeight: '700'
    },

    rank: {
        color:'white'
    },
    name: {
        color: 'white'
    },
    record: {
        color: 'white'
    },
    score: {
        color: 'white'
    },
    row: {
        borderBottomColor: 'transparent'
    },
    container: {
        marginHorizontal:10,
        marginTop: 0
    }
    

  });