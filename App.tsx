import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/routes';

import { BaseView } from './style';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#312e38" />

    <BaseView>
      <Routes />
    </BaseView>
  </NavigationContainer>
);

export default App;
