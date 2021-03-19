import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {COLORS} from '../../styles/colors';
import {SearchIcon} from '../../styles/icons';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <HeaderSearch navigation={navigation} />
    </View>
  );
};

const HeaderSearch = ({navigation}) => {
  const [searchQuery,setSearchQuery] = useState("");
  const colorProps = {
    color: COLORS.IBlue,
  }
  return (
    <SearchBar
      searchIcon={<SearchIcon props={colorProps}/>}
      placeholder="mau berlayar ke mana?"
      onChangeText={(query)=>setSearchQuery(query)}
      containerStyle={styles.searchbar}
      inputContainerStyle={styles.inputsearchbar}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    borderWidth: 0,
    paddingTop: 10,
    backgroundColor: COLORS.IBlue,
  },
  searchbar: {
    marginTop: -10,
    borderWidth: 0, // Ga jalan ini g tau knp
    height: 60,
    backgroundColor: COLORS.IBlue,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  inputsearchbar: {
    height: 40,
    borderRadius:10,
    borderWidth: 0,
    backgroundColor: COLORS.IWhite,
  },
});

export default Header;
