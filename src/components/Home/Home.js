import React, { useEffect } from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions,TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Divider,IconButton,Button, Card, Paragraph,Badge} from 'react-native-paper';
import * as Progress from 'react-native-progress';

import Banner from '../Carousel/Carousel';

//Constants
import PATUNGAN from '../../constants/PatunganHighlight.json';
import { COLORS } from '../../styles/colors';
import {ProfileCardIcon,CalendarIcon,LocationIcon,ParticipantIcon,ActivityIcon} from '../../styles/icons'

const IMAGES = [
    require('../../assets/Patungan/Patungan1.jpg'),
    require('../../assets/Patungan/Patungan2.jpg'),
]

const HeaderComponent = () => {
    return(
        <View style={[styles.container,styles.headerComponent]}>
            <View style={styles.box}>
                <Banner/>
            </View>
            <View style={[styles.box,{width:'100%',marginTop:-20}]}>
                <Text style={styles.title}>Patungan sewa kapal yuk</Text>
            </View>
        </View>
    )
}

const FooterComponent = () =>{
    return(
        <View style={[styles.container]}>
            <View style={[styles.box,{width:'100%',marginBottom:20}]}>
                <Text style={styles.title}>Cerita untuk kamu</Text>
                <Image style={{height: 250,width: Dimensions.get('window').width *0.9,resizeMode:'stretch'}}source={require('../../assets/CeritaUntukmu.jpg')} />
            </View>
        </View>
    )
}

const _renderPatungan = ({item,index}) => {
    return(
        <View>
          <Card style={styles.patungan}>
            <Card.Cover style={{height:110}} source={IMAGES[index]}/>
            <Card.Title
                style={{marginTop:-20,alignItems:'center',justifyContent:'center'}}
                rightStyle={{paddingTop:10}}
                left={(props) => {
                    return(
                    <View style={{alignItems:'center',justifyContent:'center',marginLeft:-20,marginTop:20}}>
                        <ParticipantIcon props={{color:COLORS.IBlue}}/>
                        <Text style={{color:COLORS.IBlue}}>{item.totalParticipants}/{item.maxParticipants}</Text>
                    </View>)}
                }
                right={(props) => <Progress.Bar useNativeDriver={false} style={{right:15}} progress={item.totalParticipants/item.maxParticipants} color={COLORS.IBlue} width={120} height={15} borderRadius={40}/>}
            />
            <Card.Content>
                <View style={[styles.flexrow,{marginTop:0,marginLeft:-5}]}>
                    <LocationIcon props={{color:COLORS.IBlue}} />
                    <Text>{item.pelabuhan}</Text>
                </View>
                <View style={[styles.flexrow,{marginLeft:-5}]}>
                    <CalendarIcon props={{color:COLORS.IBlue}} />
                    <Text>{item.date}</Text>
                </View>
                <View style={[styles.flexrow,{marginLeft:-5}]}>
                    <ProfileCardIcon props={{color:COLORS.IBlue}} />
                    <Text>{item.initiator}</Text>
                </View>
                <View style={[styles.flexrow,{marginLeft:-5}]}>
                    <ActivityIcon props={{color:COLORS.IBlue}} />
                    <Text>{item.activity}</Text>
                </View>
                <Divider/>
                <View style={[styles.flexrow]}>
                    <Text style={{color:COLORS.IDarkBlue,fontWeight:'bold'}}>{item.price}</Text>
                </View>
                <View style={[styles.flexrow]}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:COLORS.IWhite}}>Ikut Patungan</Text>
                    </TouchableOpacity>
                </View>
            </Card.Content>
          </Card>
        </View>
    )
}

const Home = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.outerContainer}>
            <FlatList
                data={PATUNGAN}
                keyExtractor={(item) => item.id}
                renderItem={(item,index)=>_renderPatungan(item,index)}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
                numColumns={2}
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
    patungan: {
        width: Dimensions.get('window').width * 0.45,
		height: 390,
        margin: 5,
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

export default Home;