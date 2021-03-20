import React, { useEffect,useState } from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions,TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import PENCARIAN from '../../constants/Pencarian.json';
import {COLORS} from '../../styles/colors';
import DatePicker from 'react-native-datepicker'
import {CalendarIcon,ParticipantIcon} from '../../styles/icons'
import { TextInput } from 'react-native-paper';

const IMAGES = [
  require('../../assets/Pencarian/Pencarian1.jpg'),
  require('../../assets/Pencarian/Pencarian2.jpg'),
]

const HeaderComponent = () => {
  const [date,setDate] = useState(new Date());
  const [participant,setParticipant] = useState("1");

  return(
    <>
      <View style={[styles.container,styles.headerComponent,styles.flexrow]}>
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
            // ... You can check the source to find the other keys.
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
      <View style={[styles.box,{width:'100%',marginBottom:20}]}>
          <Text style={styles.title}>Hasil Pencarian Kapal</Text>
      </View>
    </>
  )
}

const FooterComponent = () => {
  return(
    <>
      <View style={[styles.box,{width:'100%',marginBottom:20}]}>
        <Text style={styles.title}>Hasil Pencarian Patungan</Text>
      </View>
      {/* <FlatList
      /> */}
    </>
  )
}

const _renderPatungan = ({item,index}) => {
  return(
    <View style={{backgroundColor:'white'}}>
      <Image source={IMAGES[item.id]}/>
      <Text>{item.nama}</Text>
      <Text>{item.owner}</Text>
      <Text>{item.maxParticipants}</Text>
      <Text>{item.price}/hari</Text>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:COLORS.IWhite}}>Booking Sekarang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'white',borderWidth: 1,borderColor:COLORS.IBlue}]}>
          <Text style={{color:COLORS.IBlue}}>Buat Patungan</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Search = () => {
  return(
    <SafeAreaView>
        <FlatList
            data={PENCARIAN}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item,index)=>_renderPatungan(item,index)}
            ListHeaderComponent={HeaderComponent}
            ListFooterComponent={FooterComponent}
        />
    </SafeAreaView>
  )
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
  },
  flexrow:{
      flexDirection: 'row',
      paddingBottom: 5,
      alignItems:'center',
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
      width: 140,
      height: 25,
      marginLeft: 5,
      alignItems:'center',
      justifyContent: 'center',
  }
})

export default Search;