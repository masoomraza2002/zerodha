import React from 'react';

function Team() {
    return (<>
        <div className='container'>
            <div className='row text-center mb-5 p-5'>
                <h2>People</h2>

            </div>
            <hr />
            <div className='row mt-5 p-5 '>
                <div className='col text-center'>
                    <img style={{ height: "70%",borderRadius:"100%" }}  src='pics/nithinKamath.jpg' alt='pics' />
                    <h4 className='mt-3'>Nithin Kamath</h4>
                    <p>CEO and Founder</p>
                </div>
                <div className='col p-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href='' style={{textDecoration:"none"}} >Homepage</a> / <a href='' style={{textDecoration:"none"}} >TradingQnA</a> / <a href='' style={{textDecoration:"none"}} >Twitter</a></p>
                </div>
            </div>





        </div>

    </>);
}

export default Team;