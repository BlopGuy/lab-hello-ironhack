import React from 'react';
import BigDiv from './components/big-div';
import Declarative from './components/declarative';
import Components from './components/components';
import SingleWay from './components/single-way';
import JSX from './components/JSX';
import './index.css';

function App() {
    return (
        <div class = 'body'>
            <BigDiv />
            <div className='big-container'>

                <Declarative />

                <Components />

                <SingleWay />

                <JSX />

            </div>
        </div>
    )
}

export default App;