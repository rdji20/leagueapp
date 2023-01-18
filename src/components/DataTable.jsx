import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Table() {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Rank</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Record</DataTable.Title>
          <DataTable.Title numeric>Score</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>Claudio P</DataTable.Cell>
          <DataTable.Cell>10-1</DataTable.Cell>
          <DataTable.Cell >3.2</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>Octavio</DataTable.Cell>
          <DataTable.Cell>8-3</DataTable.Cell>
          <DataTable.Cell >2.1</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row styles={styles.row}>
          <DataTable.Cell>3</DataTable.Cell>
          <DataTable.Cell>Roberto</DataTable.Cell>
          <DataTable.Cell>5-6</DataTable.Cell>
          <DataTable.Cell >0.8</DataTable.Cell>
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
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor:'red'
  },



});