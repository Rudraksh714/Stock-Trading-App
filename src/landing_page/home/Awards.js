import React from 'react';
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1> Trade Smarter. Invest Better.</h1>
                    <p className='mb-5'>A powerful platform built to help you trade and invest across multiple financial products with ease:</p>
                    <div className='row'>
                        <div className='col-6 p-3'>
                            <ul>
                                <li>
                                    <p>Stocks & ETFs</p>
                                </li>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Currency Trading</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 p-3'>
                            <ul>
                                <li>
                                    <p> IPOs</p>
                                </li>
                                <li>
                                    <p> Mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds & Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default Awards;