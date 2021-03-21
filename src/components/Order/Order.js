import React, { useEffect,useState } from 'react';
import {StyleSheet,Image, Text, View, Alert, Linking} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import { RightIcon,Star0Icon} from '../../styles/icons';
import {COLORS} from '../../styles/colors';
import ORDER from '../../constants/Order.json';
import { FlatList } from 'react-native';
import { useBackButton } from '@react-navigation/native';



const Order = ({navigation}) =>{
    return(
    <Tab.Navigator>
        <Tab.Screen name="Upcoming" component={Upcoming} />
        <Tab.Screen name="Finished" component={Finished} />
    </Tab.Navigator>
    )
}

function Upcoming() {
    const [order, setOrder] = useState(null);
        
    const filterOrder = (item) => {
        return !item.finished;
    }
    
    useEffect(()=> {
        setOrder(ORDER.filter(filterOrder))
    },[])

    if (ORDER == null){
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
    else {
        return(
            <FlatList
            data={order}
            renderItem={({item}) => (
                // <View style ={styles.rowicon}>
                <View style ={styles.containerS}> 
                <View style = {{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:50, color:COLORS.IDeepDarkBlue}}>{item.dateNumber}</Text>
                    <RightIcon props={{color:COLORS.IDeepDarkBlue}} />
                </View>
                    <Text style={{fontSize:16, color:COLORS.IBlue}}>{item.date}</Text>
                    <Text style={{fontSize:14,fontWeight:'bold', color:COLORS.IBlue}}>{"\n"}{item.pelabuhan}</Text>
                    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                        <Text style={{fontSize:14, color:COLORS.IBlue}}>{item.name}</Text>
                        <Text style={{fontSize:16, color:COLORS.IBlue,fontWeight:'bold'}}>{item.owner}</Text>
                    </View>
                </View>
                // </View>
                )}
            keyExtractor={item => item.id.toString()}
            />
        )
    }
  }
  
  function Finished() {
    const [order, setOrder] = useState(null);
        
    const filterOrder = (item) => {
        return item.finished;
    }
    
    useEffect(()=> {
        setOrder(ORDER.filter(filterOrder))
    },[])
    if (ORDER == null){
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
    else {
        return(
            <FlatList
            data={order}
            renderItem={({item}) => (
                // <View style ={styles.rowicon}>
                <View style ={styles.containerS}> 
                    <View style ={{flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                        <Text style={{fontSize:50, color:COLORS.IDeepDarkBlue}}>{item.dateNumber}</Text>
                        <Star0Icon props={{color:COLORS.IBlue}}/>
                    </View>
                    <Text style={{fontSize:16, color:COLORS.IBlue}}>{item.date}</Text>
                    <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.IBlue}}>{item.pelabuhan}</Text>
                    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                        <Text style={{color:COLORS.IBlue}}>{item.name}</Text>
                        <Text style={{color:COLORS.IBlue}}>{item.owner}</Text>
                    </View>
                </View>
                // </View>
                )}
            keyExtractor={item => item.id.toString()}
            />
        )
    }
  }

const styles = StyleSheet.create({
    containerS:{
        flex : 1,
        backgroundColor: COLORS.IWhite,
        padding : 20,
        margin:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    container:{
        flex:1,
        alignItems : 'center',
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