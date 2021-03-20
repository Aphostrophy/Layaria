import React, { useEffect } from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Card, Paragraph,Badge} from 'react-native-paper';

import Banner from '../Carousel/Carousel';

//Constants
import PATUNGAN from '../../constants/Patungan.json';
import { COLORS } from '../../styles/colors';

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
            <Card.Title title="Card Title"/>
            <Card.Content>
							<View style={styles.flexrow}>
								<Badge>3</Badge>
								<Text>{item.pelabuhan}</Text>
							</View>
							<View style={styles.flexrow}>
								<Badge>3</Badge>
								<Text>{item.date}</Text>
							</View>
							<View style={styles.flexrow}>
								<Badge>3</Badge>
								<Text>Card content</Text>
							</View>
							<View style={styles.flexrow}>
								<Badge>3</Badge>
								<Text>{item.initiator}</Text>
							</View>
							<View style={styles.flexrow}>
								<Badge>3</Badge>
								<Text>{item.activity}</Text>
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
        backgroundColor:'pink',
    },
    patungan: {
        width: Dimensions.get('window').width * 0.45,
				height: 380,
        margin: 5,
    }
})

export default Home;