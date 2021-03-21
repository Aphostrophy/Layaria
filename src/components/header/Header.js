import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

import DatePicker from 'react-native-datepicker';

import {COLORS} from '../../styles/colors';
import {CalendarIcon,SearchIcon,CloseIcon,ParticipantIcon} from '../../styles/icons';

const PELABUHAN = ["Pelabuhan Sunda Kelapa,Jakarta Utara,Indonesia","Pantai Tanjung Kelayang,Belitung,Indonesia"]

const Header = ({navigation}) => {
  const [searchQuery,setSearchQuery] = useState("");
  const [pelabuhan,setPelabuhan] = useState(null);

  const handleFilter = (item) =>{
    return item.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) && searchQuery.length!=0;
  }

  const route = useRoute();

  useEffect(()=>{
    setPelabuhan(PELABUHAN.filter((item)=>handleFilter(item)));
  },[searchQuery])

  return (
    <View style={{alignItems:'center'}}>
      <View style={styles.header}>
        <HeaderSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigation={navigation} />
      </View>
      {pelabuhan && <FlatList
        style={{position:'absolute',top:40}}
        data={pelabuhan}
        renderItem={({item,index})=>_renderItem({item},index,navigation,PELABUHAN.length,route)}
        keyExtractor={(item,index)=> index.toString()}
      />}
    </View>
  );
};

const HeaderSearch = ({navigation,searchQuery,setSearchQuery}) => {
  const colorProps = {
    color: COLORS.IBlue,
  }
  return (
    <SearchBar
      searchIcon={<SearchIcon props={colorProps}/>}
      clearIcon={false}
      placeholder="mau berlayar ke mana?"
      onChangeText={(query)=>setSearchQuery(query)}
      containerStyle={styles.searchbar}
      inputContainerStyle={styles.inputsearchbar}
      inputStyle={{color:COLORS.IBrokenBlack,fontWeight:'bold'}}
      value={searchQuery}
    />
  );
};

const _renderItem = ({item},index,navigation,length,route) => {

  if(index===length-1){
    return(
      <View style={{backgroundColor:COLORS.IWhite,width:Dimensions.get('window').width * 0.955,height:40,backgroundColor:COLORS.IWhite,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
        <TouchableOpacity style={{width:'100%',height:'100%',justifyContent:'center'}} onPress={()=> handleNavigation(navigation,item,route)}>
          <Text style={{color:COLORS.IBrokenBlack,paddingLeft:20,fontWeight:'bold'}}>{item}</Text>
        </TouchableOpacity>
      </View>
    )
  } else{
    return(
      <View style={{backgroundColor:COLORS.IWhite,width:Dimensions.get('window').width * 0.955,height:40,backgroundColor:COLORS.IWhite,elevation:3}}>
        <TouchableOpacity style={{width:'100%',height:'100%',justifyContent:'center'}} onPress={()=> handleNavigation(navigation,item,route)}>
          <Text style={{color:COLORS.IBrokenBlack,paddingLeft:20,fontWeight:'bold'}}>{item}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const handleNavigation = (navigation,item,route) => {
  if(route.name!=="Search"){
    navigation.navigate("Search",{pelabuhan:item});
  } else{
    navigation.replace("Search",{pelabuhan:item});
  }
}

const styles = StyleSheet.create({
  header: {
    borderWidth: 0,
    paddingTop: 10,
    backgroundColor: COLORS.IBlue,
    alignItems:'center',
    justifyContent:'center',
  },
  searchbar: {
    marginTop: -10,
    borderWidth: 0, // Ga jalan ini g tau knp
    height: 60,
    backgroundColor: COLORS.IBlue,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    width:Dimensions.get('window').width,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.IBlue,
    marginBottom: -20,
  },
  inputsearchbar: {
    height: 40,
    borderRadius:10,
    borderWidth: 0,
    backgroundColor: COLORS.IWhite,
  },
});

export default Header;
