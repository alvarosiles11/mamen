import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
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