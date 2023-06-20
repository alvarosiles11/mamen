import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Box2 extends Component {
  render() {
    return (
      <TouchableOpacity style={{
        width: "100%",
        flex: 1,
        backgroundColor: "#006"
      }} onPress={this.props.onPress}>
        <Text style={{ color: "#fff" }}>{JSON.stringify(this.props, "\n", "\t")}</Text>
      </TouchableOpacity >
    )
  }
}