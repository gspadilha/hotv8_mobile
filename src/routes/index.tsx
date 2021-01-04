import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CarrosDashboard from '../pages/CarrosDashboard';
import CarrosDetalhe from '../pages/CarrosDestalhe';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'black' },
    }}
  >
    <App.Screen name="Dashboard" component={CarrosDashboard} />
    <App.Screen name="Detalhamento" component={CarrosDetalhe} />
  </App.Navigator>
);

export default Routes;
