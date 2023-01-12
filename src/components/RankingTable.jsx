import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { DataTable} from 'react-native-paper'

const LeagueStandings = () => {
    return (
        <View>
            <DataTable>
                <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Age</DataTable.Title>
                <DataTable.Title style={styles.status}>Status</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                <DataTable.Cell>Claudio</DataTable.Cell>
                <DataTable.Cell>25</DataTable.Cell>
                <DataTable.Cell style={styles.status}>UnFuckable</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell>Octavio</DataTable.Cell>
                <DataTable.Cell>25</DataTable.Cell>
                <DataTable.Cell style={styles.status}>Fuckable</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell>Roberto</DataTable.Cell>
                <DataTable.Cell>24</DataTable.Cell>
                <DataTable.Cell style={styles.status}>MIA</DataTable.Cell>
                </DataTable.Row>

            </DataTable>
            <TouchableOpacity style={styles.button}>
                <Text> Create New Match </Text>
             </TouchableOpacity>
        </View>
    )
}

export default LeagueStandings

const styles = StyleSheet.create({
    button: {
      padding: 15,
      color: '#DCDCDC',
      backgroundColor: 'red',
      borderRadius: '5px',
      alignItems: 'center'
    },
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
    status: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });