import React from 'react';
import {StyleSheet,Image , ImageBackground, Text, View, Alert, Linking, FlatList} from 'react-native';
import {AccountIcon} from '../../styles/icons'
import {COLORS} from '../../styles/colors';
import CHAT from '../../constants/Chat.json';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
                        <View style ={styles.row}>
                            <View style={{paddingRight:15}} >
                                <AccountIcon props={{color:COLORS.IDeepDarkBlue}}/>           
                            </View>
                            <View style={{flexGrow:2}}>
                                <Text>
                                    <Text style={styles.nameText}>{item.name}{"\n"}</Text>
                                    <Text style={styles.roleText}>{item.role}</Text>
                                </Text>
                            </View>
                            <View style={{alignContent:'flex-end',alignItems:'flex-end',}}>
                                <Text style={styles.dateText}>{item.date}</Text>
                            </View>
                        </View>
                    </View>
                    // </View>
                    )}
                keyExtractor={item => item.id}
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
        justifyContent:"flex-start"
    },
    roleText:{
        fontSize:16,
        color : COLORS.IBlue,
    },
    dateText:{
        color : COLORS.IBlue,
        fontSize:16,
        // justifyContent:'flex-end',
        // alignContent:'flex-end',
        alignSelf:'stretch',
        // alignSelf:'flex-end',
        
    }
});

export default ChatScreen;