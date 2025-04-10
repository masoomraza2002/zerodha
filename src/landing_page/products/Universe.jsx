import React from 'react';

function Universe( ) {
    return (
        <div className='container'>
            <div className='row text-center mb-5'>
                <h4>Want to know more about our technology stack? Check out the  <a className='col' style={{ textDecoration: "none" }} href=''>Zerodha.tech</a> blog.</h4>
            </div>
            <div className='row text-center mb-4'>
                <h2 className='mb-4'>The Zerodha Universe   </h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row p-5'>
                <img src='pics/univ.png' alt='univ' />
            </div>

            <div className='row text-center' >
                <button className='p-2 fs-5 btn btn-primary' style={{width:"20%" , margin:"0 auto"}}>Signup For free</button>
            </div>
            
        </div>




    );
}

export default Universe;