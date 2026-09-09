import React from 'react';
function Education() {
    return (
        <div className='container mt-7'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width: "70%", position: "relative", top: "-40px"}}/>
                </div>
                <div className='col-6'>
                    <h2 className="mb-3 fs-2">Learn. Explore. Trade Smarter.</h2>
                    <p>
                        Access practical market education designed for everyone, from beginners
                        taking their first steps to experienced traders looking to sharpen their skills.
                    </p>
                    <a href='' style={{textDecoration: "none"}}>Explore learning resources <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p>
                        Explore market insights, trading concepts, investment strategies, and 
                        answers to common questions to make more informed decisions.
                    </p>
                    <a href='' style={{textDecoration: "none"}}>Join the trading community <i class="fa-solid fa-arrow-right-long"></i></a>
                
                </div>
            </div>
        </div>
     );
}

export default Education;