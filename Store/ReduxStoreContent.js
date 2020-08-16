/**
 * @author: tongle
 *
 * @time: 2020-08-14 18:02
 *
 * @description: ReduxStoreContent组件
 *
 * @function:
 *
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import ReduxStoreContentTop from './ReduxStoreContentTop';
import ReduxStoreContentBottom from './ReduxStoreContentBottom';

export default class ReduxStoreContent extends React.Component {
  // onSubClick() {
  //   this.props.onSubClick();
  // }
  // onAddClick() {
  //   this.props.onAddClick();
  // }
  render() {
    return (
      <View style={styles.contentContainer}>
        <ReduxStoreContentTop />
        <ReduxStoreContentBottom />
      </View>
    );
    // return (
    //   <View style={styles.contentContainer}>
    //     <ReduxStoreContentTop {...this.props} />
    //     <ReduxStoreContentBottom
    //       onSubClick={this.onSubClick.bind(this)}
    //       onAddClick={this.onAddClick.bind(this)}
    //     />
    //   </View>
    // );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    margin: 60,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
});
