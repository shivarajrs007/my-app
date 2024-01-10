import './../App.css'
import React from 'react';
const Headers = () => {
    return (
        <div>

            <div className="header">
                WELCOME TO AUTO REPORTING
                <img src={process.env.PUBLIC_URL + '/document.png'} alt="logo" width="30" height="24" className="d-inline-block align-text-top" />

            </div>

        </div>
    );
}

export default Headers;