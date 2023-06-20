import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class index extends Component {

  render() {
    if (!this.repaint) this.repaint = 0;
    this.repaint++;
    return (
      <TouchableOpacity style={{
        flex: 1,
        borderWidth: 1,
      }} onPress={() => {
        console.log(this.props)
        this.props.dispatch({
          type: "login",
          data: {
            user: "ricky",
            password: "1"
          }
        });
        // this.props.dispatch();
      }}>
        <Text>{this.repaint}</Text>
        <Text >{JSON.stringify(this.props, "\n", "\t")}</Text>
      </TouchableOpacity>
    )
  }
}
// export default index;

const initStates = (state) => {
  return { state }
};
export default connect(initStates)(index);