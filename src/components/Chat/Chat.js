import React from 'react';
import {StyleSheet,Image , ImageBackground, Text, View, Alert, Linking, FlatList} from 'react-native';
import {AccountIcon} from '../../styles/icons'
import {COLORS} from '../../styles/colors';
import CHAT from '../../constants/Chat.json';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const whatsappMsg = 'Halo, saya ingin bertanya mengenai kapal ini';

const openWhatsApp = (item) => {
    Linking.canOpenURL(`whatsapp://send?phone=${item.telp}&text=${whatsappMsg}`)
      .then(() => {
        Linking.openURL(
          `whatsapp://send?phone=${item.telp}&text=${whatsappMsg}`,
        ).catch(() =>
          Alert.alert('Whatsapp needs to be installed on your device'),
        );
      })
      .catch((err) => {
        Alert.alert(err);
      });
  };

const ChatScreen = ({navigation}) =>{
    if (CHAT == null){
        return(
            <View style={styles.container}>
                <Image style={styles.img}
                    source = {require('../../assets/LogoBackground.png')} 
                />
                <Text style={styles.text}>
                    Kamu tidak memiliki obrolan dengan siapapun saat ini
                </Text>
            </View>
        )
    } else { 
          return(
              <View style={styles.containerChat}>
                <FlatList
                data={CHAT}
                renderItem={({item}) => (
                    // <View style ={styles.rowicon}>
                    <View style ={styles.personalChat}> 
                            <TouchableOpacity onPress={() => openWhatsApp(item)}>
                        <View style ={styles.row}>
                            <View style={{paddingRight:15}} >
                                <AccountIcon props={{color:COLORS.IDeepDarkBlue}}/>           
                            </View>
                            <View style={{flexGrow:2}}>
                                <Text numberOfLines={1} style={styles.nameText}>{item.name}{"\n"}</Text>
                                <Text numberOfLines={1} style={styles.roleText}>{item.role}</Text>
                            </View>
                            <View style={{alignContent:'flex-end',alignItems:'flex-end',}}>
                                <Text style={styles.dateText}>{item.date}</Text>
                            </View>
                        </View>
                            </TouchableOpacity>
                    </View>
                    // </View>
                    )}
                keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center',
        margin: 35 ,
        marginTop: 100,
        backgroundColor:COLORS.IBlack,
    },
    containerChat:{
        flex : 1,
        justifyContent: 'center',
    },
    personalChat:{
        padding:20,
        borderBottomColor:COLORS.IGrey,
        borderBottomWidth:1,
    },
    row:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-start'
    },
    rowicon:{
        flexDirection:'row',
        flex:1,
    },
    text : {
        color : COLORS.IBrokenBlack,
        fontSize : 20,
        textAlign:'center',
        fontWeight: 'bold',
    },
    img: {
        width: 250,
        height: 250,
        opacity: 0.2,
        marginBottom: 15,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    nameText:{
        fontSize:16,
        fontWeight: "bold",
        color : COLORS.IBlue,
        justifyContent:"flex-start",
        width:175,
    },
    roleText:{
        fontSize:16,
        color : COLORS.IBlue,
        width:175,
    },
    dateText:{
        color : COLORS.IBlue,
        fontSize:14,
        // justifyContent:'flex-end',
        // alignContent:'flex-end',
        alignSelf:'stretch',
        // alignSelf:'flex-end',
        
    }
});

export default ChatScreen;