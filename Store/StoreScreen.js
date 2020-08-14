/**
 * @author: tongle
 *
 * @time: 2020-08-14 17:12
 *
 * @description: Store组件
 *
 * @function:
 *
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class StoreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'TongLe',
      age: 18,
    };
  }

  onSubClick() {
    this.setState({
      age: this.state.age - 1,
    });
  }
  onAddClick() {
    this.setState({
      age: this.state.age + 1,
    });
  }

  render() {
    return (
      <StoreContent
        name={this.state.name}
        age={this.state.age}
        onSubClick={this.onSubClick.bind(this)}
        onAddClick={this.onAddClick.bind(this)}
      />
    );
  }
}
class StoreContent extends React.Component {
  onSubClick() {
    this.props.onSubClick();
  }
  onAddClick() {
    this.props.onAddClick();
  }
  render() {
    return (
      <View style={styles.contentContainer}>
        {/*<StoreContentTopCenter name={this.props.name} age={this.props.age} />*/}
        <StoreContentTopCenter {...this.props} />
        <StoreContentBottom
          onSubClick={this.onSubClick.bind(this)}
          onAddClick={this.onAddClick.bind(this)}
        />
      </View>
    );
  }
}
class StoreContentTopCenter extends React.Component {
  render() {
    return (
      <View style={styles.topContainer}>
        {/*<StoreContentTop name={this.props.name} age={this.props.age} />*/}
        <StoreContentTop {...this.props} />
      </View>
    );
  }
}

class StoreContentTop extends React.Component {
  render() {
    const {name, age} = this.props;
    return (
      <View
        style={{
          backgroundColor: 'green',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>{name}</Text>
        <Text style={{color: 'white'}}>{age}</Text>
      </View>
    );
  }
}

class StoreContentBottom extends React.Component {

  textRender(){

  }
  render() {
    return (
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.onAddClick();
          }}>
          <Text style={{fontSize: 40}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.onSubClick();
          }}>
          <Text style={{fontSize: 40}}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    margin: 60,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  topContainer: {
    margin: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  bottomContainer: {
    margin: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },
});
