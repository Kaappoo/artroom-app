import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import BarraTopo from './components/barraTopo';
import Routes from './routes/index';
import Home from './pages/home';

export default function App() {
  return (
    <NavigationContainer>
      <BarraTopo />
      <Routes />
    </NavigationContainer>
  );
}


