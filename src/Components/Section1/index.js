import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
export default class index extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
                borderWidth:1,
                padding:4,
            }}>
                <Box1 />
                <Box2 />
            </View>
        )
    }
}