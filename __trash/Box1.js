import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Box1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("[constructor]")
    }
    componentDidMount() {
        console.log("[componentDidMount]")
    }
    componentWillUnmount() {
        console.log("[componentWillUnmount]")
    }

    example() {
        this.state.count = 1;
        this.setState({ ...this.state });
    }
    render() {
        console.log("[render]")
        return (
            <View style={{
                width: "100%",
                flex: 1,
                backgroundColor: "#060"
            }}>
                <Text style={{ color: "#fff" }}>{"PROPS"}</Text>
                <Text style={{ color: "#fff" }}>{JSON.stringify(this.props, "\n", "\t")}</Text>
                <Text style={{ color: "#fff" }} >{"STATE"}</Text>
                <Text style={{ color: "#fff" }}>{JSON.stringify(this.state, "\n", "\t")}</Text>
            </View>
        )
    }
}