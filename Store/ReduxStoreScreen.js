/**
 * @author: tongle
 *
 * @time: 2020-08-14 18:00
 *
 * @description: Redux组件
 *
 * @function:
 *
 */

import React from 'react';
import ReduxStoreContent from './ReduxStoreContent';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default class ReduxStoreScreen extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'TongLe',
  //     age: 18,
  //   };
  // }
  // onSubClick() {
  //   this.setState({
  //     age: this.state.age - 1,
  //   });
  // }
  // onAddClick() {
  //   this.setState({
  //     age: this.state.age + 1,
  //   });
  // }
  render() {
    return (
      <Provider store={store}>
        <ReduxStoreContent />
      </Provider>
    );
    // return <ReduxStoreContent
    //     name={this.state.name}
    //     age={this.state.age}
    //     onSubClick={this.onSubClick.bind(this)}
    //     onAddClick={this.onAddClick.bind(this)}/>;
  }
}
