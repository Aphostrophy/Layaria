import React, { useEffect,useState } from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions,TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BoxShadow} from 'react-native-shadow'
import Dash from 'react-native-dash';
import DatePicker from 'react-native-datepicker'
import { TextInput } from 'react-native-paper';

import PENCARIAN from '../../constants/Pencarian.json';
import PATUNGAN from '../../constants/Patungan.json';
import {COLORS} from '../../styles/colors';
import {CalendarIcon,ParticipantIcon,ProfileCardIcon,LocationIcon} from '../../styles/icons'

const IMAGES_PENCARIAN = [
  require('../../assets/Pencarian/Pencarian1.jpg'),
  require('../../assets/Pencarian/Pencarian2.jpg'),
  require('../../assets/Pencarian/Pencarian3.jpg'),
  require('../../assets/Pencarian/Pencarian4.jpg'),
  require('../../assets/Pencarian/Pencarian5.jpg'),
]

const IMAGES_PATUNGAN = [
  require('../../assets/Patungan/Patungan1.jpg'),
  require('../../assets/Patungan/Patungan2.jpg'),
]

const HeaderComponent = () => {
  const [date,setDate] = useState(new Date());
  const [participant,setParticipant] = useState("1");

  return(
    <>
      <View style={[styles.container,styles.headerComponent,styles.flexrow,{width:Dimensions.get('window').width}]}>
        <CalendarIcon props={{color:COLORS.IWhite}}/>
        <DatePicker
          style={{width: 200}}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="11-03-2021"
          maxDate="11-04-2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              marginLeft: 36,
              backgroundColor:COLORS.IWhite,
              borderRadius:5,
            }
          }}
          showIcon={false}
          onDateChange={(date) => setDate(date)}
        />
        <ParticipantIcon props={{color:COLORS.IWhite}}/>
        <TextInput
          style={{height:30,backgroundColor:'white',borderWidth:0,borderRadius:5}}
          onChangeText={(text)=> setParticipant(text)}
          value={participant}
        />
      </View>
      <View style={[styles.box,{width:'100%',marginBottom:20,marginLeft:15}]}>
          <Text style={styles.title}>Hasil Pencarian Kapal</Text>
      </View>
    </>
  )
}

const FooterComponent = () => {
  return(
    <>
      <View style={[styles.box,{width:'100%',marginBottom:20,marginLeft:15}]}>
        <Text style={styles.title}>Hasil Pencarian Patungan</Text>
      </View>
      <FlatList
        data={PATUNGAN}
        key={(item)=>item.id.toString()}
        renderItem={(item,index)=>{<></>}}
      />
    </>
  )
}

const _renderPencarian = ({item,index}) => {
  // let Rating;
  // if(item.rating==5){
  //   Rating =
  // }
  return(
      <View style={{backgroundColor:'white',width:'100%',alignItems:'center',justifyContent:'center',marginBottom:15}}>
          <View style={{flexDirection:'row',flex:1,width:'90%',alignItems:'center',justifyContent:'center',borderRadius:20,elevation:3}}>
            <View style={{flex:3,height:190}}>
              <Image style={styles.image} source={IMAGES_PENCARIAN[item.id]}/>
            </View>
            <View style={{flex:4,height:189.5,backgroundColor:'white',borderTopRightRadius:20,borderBottomRightRadius:20}}>
              <View style={[styles.flexrow,{alignItems:'center',height:35}]}>
                <Text style={{fontSize:18,color:COLORS.IDarkBlue,fontWeight:'bold'}}>{item.nama}</Text>
              </View>
              <Dash dashColor={COLORS.IGrey} style={{width:215, height:1}}/>
              <View style={[styles.flexrow,{paddingTop:10}]}>
                <LocationIcon props={{color:COLORS.IBlue}}/>
                <Text>{item.pelabuhan.split(',')[0]}</Text>
              </View>
              <View style={styles.flexrow}>
                <ProfileCardIcon props={{color:COLORS.IBlue}}/>
                <Text>{item.owner}</Text>
              </View>
              <View style={styles.flexrow}>
                <ProfileCardIcon props={{color:COLORS.IBlue}}/>
                <Text>{item.maxParticipants}</Text>
              </View>
              <View style={styles.flexrow}>
                <Text style={{color:COLORS.IDarkBlue,fontWeight:'bold'}}>{item.price}/hari</Text>    
              </View>

              <View style={[styles.flexrow,{marginLeft:-5,marginTop:7}]}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{color:COLORS.IWhite,fontSize:12}}>Booking Sekarang</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{backgroundColor:'white',borderWidth: 1,borderColor:COLORS.IBlue,width:90}]}>
                  <Text style={{color:COLORS.IBlue,fontSize:12}}>Buat Patungan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>
  )
}

const Search = () => {
  return(
    <SafeAreaView style={styles.outerContainer}>
      <FlatList
          data={PENCARIAN}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item,index)=>_renderPencarian(item,index)}
          ListHeaderComponent={HeaderComponent}
          ListFooterComponent={FooterComponent}
      />
    </SafeAreaView>
  )
}

const shadowOpt = {
  width:300,
  height:300,
  color:"#000",
  border:2,
  radius:3,
  opacity:0.2,
  x:0,
  y:3,
  style:{marginVertical:5}
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
  },
  outerContainer:{
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLORS.IWhite,
  },
  flexrow:{
      flexDirection: 'row',
      paddingBottom: 5,
      alignItems:'center',
      paddingLeft:10,
  },
  headerComponent:{
    marginBottom:20,
    backgroundColor:COLORS.IBlue,
  },
  title:{
      color: COLORS.IDarkBlue,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
      alignSelf: 'stretch',
  },
  box: {
      paddingLeft: 5,
      paddingRight: 5,
      marginTop: 10,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
  },
  button:{
      backgroundColor:COLORS.IBlue,
      borderRadius: 5,
      width: 100,
      height: 25,
      marginLeft: 5,
      alignItems:'center',
      justifyContent: 'center',
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
  }
})

export default Search;