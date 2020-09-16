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
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

class ReduxStoreContentTop extends React.Component {
  render() {
      return (
          <View style={styles.topContainer}>
            <View style={styles.innerContainer}>
              <Text style={{color: 'white'}}>{this.props.name}</Text>
              <Text style={{color: 'white'}}>{this.props.age}</Text>
            </View>
          </View>
      );
  }
}

const mapStateToProps = (state) => ({
  age: state.age,
  name: state.name,
});

export default connect(mapStateToProps, null)(ReduxStoreContentTop);

const styles = StyleSheet.create({
  topContainer: {
    margin: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  innerContainer: {
    backgroundColor: 'green',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
