import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigator from './src/navigators/screennavigation';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
    StatusBar.setBackgroundColor('black');
  }, []);
  return (
    <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  );
}
export default App;
