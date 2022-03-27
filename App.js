import * as React from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomNav } from './page/BottomNav';
import { Home } from './page/Home';
import { Tinjau } from './page/transaksi/Tinjau';
import { Pesan } from './page/PesananSaya';
const Stack = createNativeStackNavigator();


function App() {
  const ref = React.useRef(null);
  return (
    <View style={{flex:1}}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Tinjau" component={Tinjau} />
          <Stack.Screen name="Pesan" component={Pesan} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

export default App;
