import React, { useEffect } from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Divider,IconButton,Button, Card, Paragraph,Badge} from 'react-native-paper';
import * as Progress from 'react-native-progress';

import Banner from '../Carousel/Carousel';

//Constants
import PATUNGAN from '../../constants/Patungan.json';
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
            <View style={[styles.box,{width:'100%'}]}>
                <Text style={styles.title}>Patungan sewa kapal yuk</Text>
            </View>
        </View>
    )
}

const _renderPatungan = ({item,index}) => {
    return(
        <View>
          <Card style={styles.patungan}>
            <Card.Cover source={IMAGES[index]}/>
            <Card.Title
                style={{marginTop:-20}}
                left={(props) => <Text>A</Text>}
                right={(props) => <Progress.Bar style={{right:20}} progress={item.totalParticipants/item.maxParticipants} width={120} height={9} borderRadius={40}/>}
            />
            <Card.Content>
                <View style={[styles.flexrow,{marginTop:-20,marginLeft:-5}]}>
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
		height: 440,
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