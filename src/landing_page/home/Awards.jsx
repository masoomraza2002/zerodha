import React from 'react';
function Awards () {
    return ( 
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src='pics/largestBroker.svg' alt='awards'/>
            </div>
            <div className='col-6 text-center p-5'>
                <h1>Largest Broker in India</h1>
                <p className='mb-5 mt-5'>2 million clients contibute over volumes</p>
                <div className='row '>
                    <div className='col-6'>
                        <ul>
                            <li>Futures and options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govenment Security</li>
                        </ul>
                    </div>
                </div>
                <img className='mt-5' src='pics/pressLogos.png'  style={{width:"80%"}} alt='press' />
            </div>

        </div>


    </div>
    
    );
}

export default Awards;