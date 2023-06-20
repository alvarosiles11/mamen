import React, { useRef } from 'react';
import { View, Text } from 'react-native'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'


import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider as ProviderRedux } from 'react-redux';
import reduxThunk from 'redux-thunk';


const usuarioReducer = (state, action) => {
    console.log("[usuarioReducer] entro al reducer", state, action)
    if (!state) state = { version: "1.0" };
    if (action.type == "login") {
        state.usuarioLog = action.data;
        return { ...state }
    }
    return state;
}
const exampleReducer = (state, action) => {
    console.log("[exampleReducer] entro al reducer", state, action)
    if (!state) state = { version: "1.0" };
    return state;
}

export const store = createStore(
    combineReducers({ usuarioReducer, exampleReducer }),
    {},
    applyMiddleware(reduxThunk),
);

const App = (props) => {
    const box1 = useRef();
    return <ProviderRedux store={store} >
        <View style={{
            width: "100%",
            flex: 1,
            padding: 4,
        }}>
            <Section1 />
            <Section2 />
        </View>
    </ProviderRedux>
}
export default App;
