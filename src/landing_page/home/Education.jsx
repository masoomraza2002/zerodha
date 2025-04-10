import React from 'react';
function Education() {
    return (
        <div className='container'>
            <div className='row mb-5 mt-5 p-5'>
                <div className='col-6'>
                    <img  src='pics/education.svg' alt=''  />
                </div>
                
                <div className='col-6'>
                    <div className='row '>
                        <h1 className='mb-5 fs-2'>Free and open market education</h1>
                             <div className='row mb-5'>
                            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a   style={{ textDecoration: "none" }} href=''>Versity<i class="fa-solid fa-arrow-right"></i>  </a>
                            </div>                     
                            <div className='row mb-5'>
                            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                            <a   style={{ textDecoration: "none" }} href=''>TradingQ&A<i class="fa-solid fa-arrow-right"></i>  </a>
                            </div>                                                     
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Education;