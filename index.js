/**
 * @format
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as ReduxProvider } from "react-redux";
import App from './App';
import { name as appName } from './app.json';
import Store from './app/Redux/Store';

const provider = () => {
    return (
        <ReduxProvider store={Store}>
            <App />
        </ReduxProvider>
    )
}

AppRegistry.registerComponent(appName, () => provider);
