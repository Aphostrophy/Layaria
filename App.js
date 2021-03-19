import 'react-native-gesture-handler';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/components/Main/Main';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaProvider>
        <AppNavigator/>
      </SafeAreaProvider>
    </>
  )
};

export default App;
