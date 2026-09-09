import React from 'react';
function Stats() {
    return (
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Invest with confidence</h1>
                    <h2 className='fs-4'>Built for investors</h2>
                    <p>A simple and reliable platform trusted by investors to manage their portfolios, explore opportunities, and make informed investment decisions.</p>
                    <h2 className='fs-4'>No distractions, just trading</h2>
                    <p className='text-muted'>
                        No unnecessary gimmicks or distracting notifications. Enjoy a clean,
                        focused experience that lets you trade and invest at your own pace.
                    </p >

                    <h2 className='fs-4'>Your complete investment platform</h2>
                    <p className='text-muted'>
                        Access everything you need in one place — from stocks and ETFs to IPOs,
                        mutual funds, bonds, and market insights.
                    </p>

                    <h2 className='fs-4'>Make smarter financial decisions</h2>
                    <p className='text-muted'>
                        Get useful insights, portfolio analytics, and tools designed to help you
                        understand the market and manage your investments more effectively.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width: "90%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration: "none"}}>Explore our platform <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' style={{textDecoration: "none"}}>Try our trading demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;