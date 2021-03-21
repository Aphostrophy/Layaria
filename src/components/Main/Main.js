// React and React Natives
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useContext, useEffect} from 'react';

// Screen Components
import Home from '../Home/Home'
import Search from '../Search/Search'
import OrderScreen from '../Order/Order'
import ChatScreen from '../Chat/Chat'
import Profile from '../Profile/Profile'
// Context

// Header
import Header from '../header/Header';

// Styles
import {COLORS} from '../../styles/colors';
import { HomeIcon,OrderIcon,ChatIcon,ProfileIcon} from '../../styles/icons';

const StackRoot = createStackNavigator();
const StackHome = createStackNavigator();
const StackProfile = createStackNavigator();
const StackChat = createStackNavigator();
const StackOrder = createStackNavigator()

const Tab = createMaterialBottomTabNavigator();

const Main = () => {

  return (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
  );
};

const RootStack: React.FC = () => {
  return (
    <StackRoot.Navigator
      initialRouteName="Root"
      screenOptions={{headerShown: false}}>
      <StackRoot.Screen name="Root" component={RootTab} />
    </StackRoot.Navigator>
  );
};

const RootTab: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      backBehavior="initialRoute"
      activeColor={COLORS.IDeepDarkBlue}
      barStyle={styles.barStyle}
      shifting={false}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Beranda',
          // eslint-disable-next-line react/display-name
          tabBarIcon: (props) => <IconBottom iconname="Home" data={props} />,
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          title: 'Pesanan',
          // eslint-disable-next-line react/display-name
          tabBarIcon: (props) => <IconBottom iconname="Order" data={props} />,
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          title: 'Obrolan',
          // eslint-disable-next-line react/display-name
          tabBarIcon: (props) => <IconBottom iconname="Chat" data={props} />,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: 'Akun Saya',
          // eslint-disable-next-line react/display-name
          tabBarIcon: (props) => <IconBottom iconname="Profile" data={props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack: React.FC = () => {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={Home}
        options={{
          // eslint-disable-next-line react/display-name
          header: (props) => <Header {...props} />,
        }}
      />
      <StackHome.Screen
        name="Search"
        component={Search}
        options={{
          // eslint-disable-next-line react/display-name
          header: (props) => <Header {...props} />,
        }}
      />
    </StackHome.Navigator>
  );
};

const ProfileStack: React.FC = () => {
  return (
    <StackProfile.Navigator initialRouteName="User">
      <StackProfile.Screen
        name="User"
        component={Profile}
        options={{title: 'Akun Saya'}}
      />
    </StackProfile.Navigator>
  );
};

const ChatStack: React.FC = () => {
  return (
    <StackChat.Navigator initialRouteName="Chat">
      <StackChat.Screen
        name="Chat"
        component={ChatScreen}
        options={{title: 'Obrolan'}}
      />
    </StackChat.Navigator>
  );
};

const OrderStack: React.FC = () => {
  return (
    <StackOrder.Navigator initialRouteName="Order">
      <StackOrder.Screen
        name="Order"
        component={OrderScreen}
        options={{headerShown:false}}
      />
    </StackOrder.Navigator>
  );
};

const IconBottom = (props: any) => {
  const {color, focused} = props.data;
  const colorSelected = focused ? COLORS.IDeepDarkBlue : COLORS.IWhite;
  const colorProps = {
    color: colorSelected,
  };
  if (props.iconname === 'Home') {
    return (
      <View>
        <HomeIcon props={colorProps} />
      </View>
    );
  } else if (props.iconname === 'Order') {
    return (
      <View>
        <OrderIcon props={colorProps} />
      </View>
    );
  } else if (props.iconname === 'Chat') {
    return (
      <View>
        <ChatIcon props={colorProps} />
      </View>
    );
  } else if (props.iconname === 'Profile') {
    return (
      <View>
        <ProfileIcon props={colorProps} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: COLORS.IBlue,
  },
});

export default Main;
