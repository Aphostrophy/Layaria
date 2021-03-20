import React from 'react';
import {StyleSheet,Image, Text, View, Alert, Linking} from 'react-native';

import {COLORS} from '../../styles/colors';
const Order = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.img}
                source = {require('../../assets/LogoBackground.png')} 
            />
            <Text style={styles.text}>
                Kamu tidak memiliki {"\n"} pesanan saat ini
            </Text>
            <Text style={styles.text}>
                {"\n"}Ayo Berlayar bersama Layaria!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center',
        margin: 35 ,
        marginTop: 80,
    },
    text : {
        color : COLORS.IBrokenBlack,
        fontSize : 20,
        textAlign:'center',
        fontWeight:'bold'
    },
    img: {
        width: 250,
        height: 250,
        opacity: 0.2,
        marginBottom: 15,
    },
});


export default Order;