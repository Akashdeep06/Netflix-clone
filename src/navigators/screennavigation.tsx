import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './bottomnavigators';
import User from '../screens/username'
const Stack = createNativeStackNavigator();
const ScreenNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='User' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="User" component={User}
            />
            <Stack.Screen name="Home" component={BottomNavigation} />
        </Stack.Navigator>
    );
}
export default ScreenNavigator;