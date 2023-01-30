import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, FlatList, Image, TouchableOpacity} from 'react-native';

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
  const DefaultImage = ({user}) => {
    return (
      <View style={{backgroundColor: "rgba(256,256,256,0.1)", display:'flex', justifyContent:'center', alignItems:'center', width: 55, height: 55, borderRadius:55, borderColor:'rgba(256, 256, 256, 1)', borderWidth:0.5}}>
        <Text style={{color:"white", fontSize:16, fontWeight:'400'}}>{user.split(' ').map(val => val.charAt(0).toUpperCase())}</Text>
      </View>
    )
  }
  const ListItem = ({ item, index}) => {
    return (
      <TouchableOpacity style={styles.item} key={item.userId}
        onPress={() => {handleSelect(item)}}
      >
          {item.picUri != '' ? <Image 
          style={styles.itemPhoto} 
          source={{
              uri: item.picUri
          }}
          /> : <DefaultImage user={item.displayName}/>}
          <Text style={styles.itemText}>{item.displayName != '' && item.displayName != ' ' ? item.displayName.split(' ')[0] : 'User'}</Text>
          <View style={{display:'flex', flexDirection:'row'}}>
          {index === -1 ? <MaterialCommunityIcons name={'trophy'} style={{color:place, fontSize:25, zIndex:'1'}}></MaterialCommunityIcons>: ''}
  {/*         {index < 3 ? <MaterialCommunityIcons name={'trophy'} style={{color:place, fontSize:15, zIndex:'0'}}></MaterialCommunityIcons>: ''} */}
          </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={selecting}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setSelecting(!selecting);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color:'#fffffe'}}> Select Player</Text>
          <FlatList
            horizontal
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
    margin: 20,
    height:300,
    backgroundColor: '#242629',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:300,
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    marginHorizontal: 8,
    marginBottom:15,
    shadowColor:"black",
    shadowOpacity:0.8,
    shadowRadius:6,
    paddingTop:15,
    width:60
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
    fontWeight:'400',
    marginTop: 8,
    fontSize: 12,
    marginBottom: 5
  },
  container: {
    backgroundColor: "transparent",
    marginTop:0,
  },
  first:{
    textAlign:'center',
    color: 'white',
    fontWeight:'500',
    marginTop: 8,
    fontSize: 12,
    shadowColor:"gold",
    shadowOpacity:0.5,
    shadowRadius:5,
  },
  second:{
    textAlign:'center',
    color: 'white',
    fontWeight:'500',
    marginTop: 8,
    fontSize: 12,
    shadowColor:"grey",
    shadowOpacity:0.8,
    shadowRadius:6,
  },
  third:{
    textAlign:'center',
    color: 'white',
    fontWeight:'500',
    marginTop: 8,
    fontSize: 12,
    shadowColor:"#CD7F32",
    shadowOpacity:0.8,
    shadowRadius:6,
  }
});
