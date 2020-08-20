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
import ReduxStoreScreen from './Store/ReduxStoreScreen';

const App: () => React$Node = () => {
  return (
    <View>
      {/*<ReduxStoreScreen />*/}
      <StoreScreen />
    </View>
  );
};

export default App;
