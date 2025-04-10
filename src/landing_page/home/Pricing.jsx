import React from 'react';
function Pricing() {
    return (
        <div className='container p-5'>
            <div className='row mb-5 p-5'>
                <div className='col-4'>
                    <h1>Unbeatable pricing </h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className='col' style={{ textDecoration: "none" }} href=''>See Pricing <i class="fa-solid fa-arrow-right"></i>  </a>

                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>Rs.0</h1>
                            <p>Free equiyty delivery and <br/>direct mutual fund</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>Rs.20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Pricing;