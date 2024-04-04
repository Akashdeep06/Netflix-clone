import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/home';
import Search from '../screens/search';
import Soon from '../screens/comingsoon';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/AntDesign';
import More from '../screens/more';
import Downloads from '../screens/downloads';
const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={26} color={'white'} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <Icon1 name="search" size={26} color={'white'} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Coming Soon"
        component={Soon}
        options={{
          tabBarIcon: () => (
            <Icon2 name="animation-play-outline" size={26} color={'white'} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarIcon: () => (
            <Icon4 name="arrowdown" size={26} color={'white'} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: () => <Icon3 name="menu" size={26} color={'white'} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
