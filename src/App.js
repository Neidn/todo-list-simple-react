import React from 'react';

import './App.css';
import "tailwindcss/tailwind.css";
import {Provider} from "react-redux";

import Main from "./containers/Main";
import store from "./store";


function App() {
    return (
        <Provider store={store}>
            <div className={"min-h-dvh bg-gray-200"}>
                <Main/>
            </div>
        </Provider>
    );
}

export default App;
