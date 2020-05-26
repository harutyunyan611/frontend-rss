import React from 'react';
import RssContainer from "./containers/RssContainer";
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Provider store={store}>
                    <RssContainer />
                </Provider>
            </header>
        </div>
    );
}

export default App;
