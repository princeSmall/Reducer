/**
 * @author: tongle
 *
 * @time: 2020-08-14 18:03
 *
 * @description: Title
 *
 * @function:
 *
 */

import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {increment, decrement} from './ations';
import {connect} from 'react-redux';

class ReduxStoreContentBottom extends React.Component {
  textRender(content, isDec) {
    return (
      <TouchableOpacity
        onPress={() => {
          isDec ? this.props.decrement() : this.props.increment();
        }}>
        <Text style={{fontSize: 40}}>{content}</Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.bottomContainer}>
        {this.textRender('+', true)}
        {this.textRender('-', false)}
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
});

export default connect(null, mapDispatchToProps)(ReduxStoreContentBottom);

const styles = StyleSheet.create({
  bottomContainer: {
    margin: 60,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },
});
