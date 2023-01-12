import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Table() {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Age</DataTable.Title>
          <DataTable.Title numeric>Status</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Claudio</DataTable.Cell>
          <DataTable.Cell>25</DataTable.Cell>
          <DataTable.Cell >UnFuckable</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Octavio</DataTable.Cell>
          <DataTable.Cell>25</DataTable.Cell>
          <DataTable.Cell >Fuckable</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Roberto</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
          <DataTable.Cell >MIA</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 0,
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});