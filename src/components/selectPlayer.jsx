import { BlurView } from 'expo-blur';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, FlatList, Image, TouchableOpacity} from 'react-native';
import { fullName } from '../utils/helperFunctions';
import { DefaultImage } from './defaultImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const SelectPlayer = ({selecting, setSelecting, users, setPlayerOne, setPlayerTwo, selectingPlayer}) => {

  const handleSelect = (item) => {
    if (selectingPlayer === 'One'){
      setPlayerOne(item)
      setSelecting(false)
    }else{
      setPlayerTwo(item)
      setSelecting(false)
    }
  }
/*   const DefaultImage = ({user}) => {
    return (
      <View style={{backgroundColor: "rgba(256,256,256,0.1)", display:'flex', justifyContent:'center', alignItems:'center', width: 55, height: 55, borderRadius:55, borderColor:'rgba(256, 256, 256, 1)', borderWidth:0.5}}>
        <Text style={{color:"white", fontSize:16, fontWeight:'400'}}>{user.split(' ').map(val => val.charAt(0).toUpperCase())}</Text>
      </View>
    )
  } */
  const ListItem = ({ item, index}) => {
    return (
      <TouchableOpacity style={styles.item} key={item.userId}
        onPress={() => {handleSelect(item)}}
      >
          <DefaultImage displayName={item.displayName } color={'#7f5af0'} size={'Small'}></DefaultImage>

          <Text style={styles.itemText}>{item.displayName != '' && item.displayName != ' ' ? fullName(item.displayName ) : 'User'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={selecting}
        onRequestClose={() => {
          setSelecting(!selecting);
        }}>
        
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity  style={{position:'absolute',top:10, right:10,margin:10, zIndex:10}} onPress={() => {
              setSelecting(false)
            }}>
              <Text><MaterialCommunityIcons name='close'style={{color:'#7f5af0', fontSize:25, }}></MaterialCommunityIcons></Text>
            </TouchableOpacity>
            <Text style={styles.h3}> Select Player</Text>
            <FlatList
              style={{width:'100%'}}
              data={users}
              renderItem={({ item, index}) => <ListItem item={item} index={index}/>}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
  },
  modalView: {
    position:'absolute',
    bottom:0,
    height:300,
    backgroundColor: '#242629',
    borderRadius: 12,
    alignItems: 'center',
    width:'100%',
    paddingVertical:30
  },
  button: {
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#7f5af0',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 2,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'baseline',
    alignItems:'center',
    marginHorizontal: 8,
    marginBottom:15,
    shadowColor:"black",
    shadowOpacity:0.8,
    shadowRadius:6,
    width:'100%',
    paddingBottom:5,

  },
  itemPhoto: {
    width: 55, 
    height: 55, 
    borderRadius: 55/ 2,
    borderColor:'rgba(256, 256, 256, 1)',
    borderWidth:0.5,

  },
  itemText: {
    textAlign:'center',
    color: 'rgba(256, 256, 256, 1)',
    fontWeight:'500',
    marginTop: 8,
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 10
  },
  container: {
    backgroundColor: "transparent",
    marginTop:0,
  },
  h3:{
    color:'white',
    fontWeight:'600',
    fontSize:18,
    marginBottom:30
  }
});
