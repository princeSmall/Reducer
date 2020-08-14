/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import StoreScreen from './Store/StoreScreen';

const App: () => React$Node = () => {

  return (
    <View>
      <StoreScreen />
    </View>
  );
};

export default App;
