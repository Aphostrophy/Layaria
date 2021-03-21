import React from 'react';
import {StyleSheet, Text, View, Alert, Linking,Image} from 'react-native';
import {COLORS} from '../../styles/colors';
import {BigProfileIcon} from '../../styles/icons';
const Profile = ({navigation}) =>{
    return(
    <View style={styles.container}>
        <View style={{alignItems:'center',marginBottom:10}}>
            <BigProfileIcon props={{color1 : COLORS.IBlue, color2:COLORS.IBlueMint}}/>
        </View>
        <Text style={{textAlign:'center',fontSize:36,marginBottom:10}}>Alexander</Text>
        <Text style={styles.text}>Ubah Profil</Text>
        <Text style={styles.text}>Pengaturan</Text>
        <Text style={styles.text2}>Keluar</Text>
        <Text style={styles.text2}>Hapus Akun</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:'center',
    },
    text:{
        padding:10,
        backgroundColor:COLORS.IBlue,
        margin: 5,
        marginHorizontal:50,
        borderRadius:10,
        fontSize:24,
        color:COLORS.IWhite,
        textAlign:'center',
    },
    text2:{
        padding:10,
        backgroundColor:COLORS.IWhite,
        margin : 5,
        marginHorizontal:50,
        borderRadius:10,
        fontSize:24,
        color:COLORS.IBlue,
        textAlign:'center',
        borderWidth:1,
        borderColor:COLORS.IBlue,
    },
})

export default Profile;