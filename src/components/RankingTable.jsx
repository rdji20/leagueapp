import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { DataTable} from 'react-native-paper'

const LeagueStandings = () => {
    return (
        <View style={styles.container}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Rank</Text></DataTable.Title>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Name</Text></DataTable.Title>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Record</Text></DataTable.Title>
                    <DataTable.Title style={styles.title}><Text style={styles.status}>Win Pct</Text></DataTable.Title>
                </DataTable.Header>

                <DataTable.Row style={styles.row}>
                <DataTable.Cell style={styles.cell}><Text style={styles.rank}>1</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.name}>Claudio</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.record}>10-0</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.score}>3.2</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row  style={styles.row}>
                <DataTable.Cell style={styles.cell}><Text style={styles.rank}>2</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.name}>Roberto</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.record}>8-2</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.score}>2.1</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                <DataTable.Cell style={styles.cell}><Text style={styles.rank}>3</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.name}>Octavio</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.record}>6-4</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.score}>0.9</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                <DataTable.Cell style={styles.cell}><Text style={styles.rank}>4</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.name}>Meo</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.record}>4-6</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.score}>0.7</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                <DataTable.Cell style={styles.cell}><Text style={styles.rank}>5</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.name}>Daniela</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.record}>0-10</Text></DataTable.Cell>
                <DataTable.Cell style={styles.cell}><Text style={styles.score}>0.4</Text></DataTable.Cell>
                </DataTable.Row>

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