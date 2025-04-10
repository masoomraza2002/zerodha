import React from 'react';

function Hero() {
    return (
        <section id="supportHero" className="container-fluid">
            <div className='mt-5 p-5' id="supportWrapper">
                <h4>Support</h4>
                <a href="" style={{ color: "white", textDecoration: "none" }}>
                    <h4>Track Tickets</h4>
                </a>
            </div>

            <div className="row mb-5 " style={{ color: "white" }}>
                <div className='col-2'></div>
                <div className="col-6 mb-5 px-3 p-5">
                    <h1>Search for an answer or browse help topics to create a ticket</h1>
                    <div className='row'>
                        <a href='' className='col'>Track account opening</a>
                        <a href='' className='col'>Track segment activation</a>
                        <a href='' className='col'>Intraday margins</a>
                    </div>
                    <a href=''>Kite user manual</a>
                </div>
                <div className="col-4 mb-5 px-3 p-5">
                    <h1>Featured</h1>
                    <a href=''>Current Takeovers and Delisting - January 2025</a>
                    <br />
                    <a href=''>Surveillance measure on scrips - January 2025</a>
                </div>
                <div className='col-2'></div>

            </div>



        </section>
    );
}

export default Hero;
