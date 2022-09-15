import React from 'react';
import '../css/App.css';

const Main = (props) => {
    return (
        <div>
            <h1>main screen</h1>
            <hr/>
                {props.children}
            <hr/>
        </div>
    );
}

export default Main;