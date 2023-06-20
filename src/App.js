import React, { useRef } from 'react';
import { View, Text } from 'react-native'
import Box1 from './Components/Box1';
import Box2 from './Components/Box2';
const App = (props) => {
    const box1 = useRef();
    return <View style={{
        width: "100%",
        flex: 1,
        backgroundColor: "#000"
    }}>
        <Box1 ref={box1} obj={{ nombre: "Asdasd", apellido: "Sadasd" }} algo />
        <Box2 onPress={() => {
            box1.current.example();
        }} />
    </View>
}
export default App;
