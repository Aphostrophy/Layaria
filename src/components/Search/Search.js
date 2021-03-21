import React, { useEffect,useState } from 'react';
import {StyleSheet, Text, TextInput,View, FlatList, Dimensions,TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BoxShadow} from 'react-native-shadow'
import Dash from 'react-native-dash';
import DatePicker from 'react-native-datepicker'
import * as Progress from 'react-native-progress';

import PENCARIAN from '../../constants/Pencarian.json';
import PATUNGAN from '../../constants/Patungan.json';
import WEATHER from '../../constants/Weather.json';

import {COLORS} from '../../styles/colors';
import {CalendarIcon,ParticipantIcon,ProfileCardIcon,LocationIcon,ActivityIcon,SunnyIcon,RainyIcon,ThunderStormIcon,CloudyIcon,Star0Icon,Star1Icon,Star2Icon,Star3Icon,Star4Icon,Star5Icon} from '../../styles/icons'

const IMAGES_PENCARIAN = [
  require('../../assets/Pencarian/Pencarian1.jpg'),
  require('../../assets/Pencarian/Pencarian2.jpg'),
  require('../../assets/Pencarian/Pencarian3.jpg'),
  require('../../assets/Pencarian/Pencarian4.jpg'),
  require('../../assets/Pencarian/Pencarian5.jpg'),
  require('../../assets/Pencarian/Pencarian6.jpg'),
  require('../../assets/Pencarian/Pencarian7.jpg'),
  require('../../assets/Pencarian/Pencarian8.jpg'),
  require('../../assets/Pencarian/Pencarian9.jpg'),
]

const IMAGES_PATUNGAN = [
  require('../../assets/Patungan/Patungan1.jpg'),
  require('../../assets/Patungan/Patungan2.jpg'),
  require('../../assets/Patungan/patungan3.jpg'),
  require('../../assets/Patungan/patungan4.jpg'),
  require('../../assets/Patungan/patungan5.jpg'),
  require('../../assets/Patungan/patungan6.jpg'),
]

const HeaderComponent = ({person,setPerson}) => {
  const [date,setDate] = useState(new Date());

  return(
    <>
      <View style={[styles.container,styles.headerComponent,styles.flexrow,{width:Dimensions.get('window').width,alignItems:'center',justifyContent:'space-around',height:60,marginTop:19}]}>
        <CalendarIcon props={{color:COLORS.IWhite}}/>
        <DatePicker
          style={{width: 100}}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="11/03/2021"
          maxDate="11/04/2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              backgroundColor:COLORS.IWhite,
              borderRadius:5,
            }
          }}
          showIcon={false}
          onDateChange={(date) => setDate(date)}
        />
        <ParticipantIcon props={{color:COLORS.IWhite}}/>
        <TextInput
          style={{height:35,paddingTop:0,paddingBottom:0,backgroundColor:'white',borderWidth:0,borderRadius:5}}
          keyboardType="numeric"
          onChangeText={(text)=> setPerson(text)}
          value={person}
        />
        <View style={[styles.flexrow,{paddingBottom:0,marginBottom:0,height:50,width:130,paddingRight:5}]}>
          <View style={{flex:5,backgroundColor:COLORS.IDarkBlue,height:'100%',borderTopLeftRadius:10,borderBottomLeftRadius:10,alignItems:'center',justifyContent:'center'}}>
            <ThunderStormIcon props={{color:COLORS.IWhite}}/>
          </View>
          <View style={{flex:8,backgroundColor:COLORS.IWhite,height:'100%',width:40,paddingLeft:3,borderTopRightRadius:10,borderBottomRightRadius:10,justifyContent:'center'}}>
            <Text style={{color:COLORS.IBlue}}>
              Cloudy
            </Text>
            <Text style={{color:COLORS.IBlue}}>
              25º
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.box,{width:'100%',marginBottom:20,marginLeft:15}]}>
          <Text style={styles.title}>Hasil Pencarian Kapal</Text>
      </View>
    </>
  )
}

const FooterComponent = ({patungan}) => {
  return(
    <>
      <View style={[styles.box,{width:'100%',marginBottom:20,marginLeft:15}]}>
        <Text style={styles.title}>Hasil Pencarian Patungan</Text>
      </View>
      <FlatList
        data={patungan}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={(item,index)=>_renderPatungan(item,index)}
      />
    </>
  )
}

const _renderPatungan = ({item,index}) => {
  return(
      <View style={{backgroundColor:'white',width:'100%',alignItems:'center',justifyContent:'center',marginBottom:15}}>
          <View style={{flexDirection:'row',flex:1,width:'90%',alignItems:'center',justifyContent:'center',borderRadius:20,elevation:3}}>
            <View style={{flex:2,height:190}}>
              <Image style={styles.image} source={IMAGES_PENCARIAN[item.id]}/>
            </View>
            <View style={{flex:3,height:189.5,backgroundColor:'white',borderTopRightRadius:20,borderBottomRightRadius:20}}>
              <View style={[styles.flexrow,{alignItems:'center',height:35}]}>
                <Text numberOfLines={1} style={{width:110,fontSize:16,color:COLORS.IDarkBlue,fontWeight:'bold'}}>{item.nama}</Text>
              </View>
              <Dash dashThickness={1} dashColor={COLORS.IGrey} style={{width:'100%', height:1}}/>
              <View style={[styles.flexrow,{paddingTop:10}]}>
                <LocationIcon props={{color:COLORS.IBlue}}/>
                <Text>{item.pelabuhan.split(',')[0]}</Text>
              </View>
              <View style={styles.flexrow}>
                <ProfileCardIcon props={{color:COLORS.IBlue}}/>
                <Text>{item.initiator}</Text>
              </View>
              <View style={styles.flexrow}>
                <ActivityIcon props={{color:COLORS.IBlue}}/>
                <Text>{item.activity}</Text>
              </View>
              <View style={[styles.flexrow,{alignItems:'center'}]}>
                <View style={{alignItems:'center',justifyContent:'center',paddingTop:2,height:35}}>
                  <ParticipantIcon props={{color:COLORS.IBlue}}/>
                  <Text style={{color:COLORS.IBlue}}>{item.totalParticipants}/{item.maxParticipants}</Text>
                </View>
                <Progress.Bar useNativeDriver={false} style={{left:5}} progress={item.totalParticipants/item.maxParticipants} color={COLORS.IBlue} width={120} height={15} borderRadius={40}/>
              </View>
              <View style={styles.flexrow}>
                <Text style={{color:COLORS.IDarkBlue,fontWeight:'bold'}}>{item.price}/hari</Text>    
              </View>
            </View>
          </View>
      </View>
  )
}

const RatingLogo = ({rating}) =>{
  if(rating==5){
    return(
      <Star5Icon props={{color:COLORS.IDarkBlue}}/>
    )
  }
  if(rating==4){
    return(
      <Star4Icon props={{color:COLORS.IDarkBlue}}/>
    )
  }
  if(rating==3){
    return(
      <Star3Icon props={{color:COLORS.IDarkBlue}}/>
    )
  }
  if(rating==2){
    return(
      <Star2Icon props={{color:COLORS.IDarkBlue}}/>
    )
  }
  if(rating==1){
    return(
      <Star1Icon props={{color:COLORS.IDarkBlue}}/>
    )
  }
  if(rating==0){
    return(
      <Star0Icon props={{color:COLORS.IDarkBlue}}/>
    )
  }
}

const _renderPencarian = ({item,index}) => {
  return(
      <View style={{backgroundColor:'white',width:'100%',alignItems:'center',justifyContent:'center',marginBottom:15}}>
        <View style={{flexDirection:'row',flex:1,width:'90%',alignItems:'center',justifyContent:'center',borderRadius:20,elevation:3}}>
          <View style={{flex:2,height:190}}>
            <Image style={styles.image} source={IMAGES_PENCARIAN[item.id]}/>
          </View>
          <View style={{flex:3,height:189.5,backgroundColor:'white',borderTopRightRadius:20,borderBottomRightRadius:20}}>
            <View style={[styles.flexrow,{alignItems:'center',height:35}]}>
              <Text numberOfLines={1} style={{width:110,fontSize:16,color:COLORS.IDarkBlue,fontWeight:'bold'}}>{item.nama}</Text>
              <RatingLogo rating={item.rating} />
            </View>
            <Dash dashThickness={1} dashColor={COLORS.IGrey} style={{width:'100%', height:1}}/>
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
                <Text style={{color:COLORS.IWhite,fontSize:12}}>Sewa</Text>
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

const Search = ({route,navigation}) => {

  const [pencarian,setPencarian] = useState(null);
  const [patungan,setPatungan] = useState(null);
  const [person,setPerson] = useState("1");

  const filterPencarian = (item) => {
    return item.pelabuhan.toLocaleLowerCase().includes(route.params.pelabuhan.toLocaleLowerCase()) && item.maxParticipants >= parseInt(person);
  }

  const filterPatungan = (item) => {
    return item.pelabuhan.toLocaleLowerCase().includes(route.params.pelabuhan.toLocaleLowerCase()) && item.maxParticipants-item.totalParticipants >= parseInt(person);
  }

  useEffect(()=>{
    setPencarian(PENCARIAN.filter(filterPencarian));
    setPatungan(PATUNGAN.filter(filterPatungan));
  },[person])

  return(
    <SafeAreaView style={styles.outerContainer}>
      <FlatList
          data={pencarian}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item,index)=>_renderPencarian(item,index)}
          ListHeaderComponent={<HeaderComponent person={person} setPerson={setPerson}/>}
          ListFooterComponent={<FooterComponent patungan={patungan} />}
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
    paddingBottom:-20,
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
      width: 50,
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