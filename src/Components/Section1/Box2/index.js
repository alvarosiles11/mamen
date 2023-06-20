import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class index extends Component {
  render() {
    if (!this.repaint) this.repaint = 0;
    this.repaint++;
    return (
      <View style={{
        flex: 1,
        borderWidth: 1,
      }}>
        <Text>{this.repaint}</Text>
        <Text >{JSON.stringify(this.props, "\n", "\t")}</Text>
      </View>
    )
  }
}

const initStates = (state) => {
  return { state }
};
export default connect(initStates)(index);