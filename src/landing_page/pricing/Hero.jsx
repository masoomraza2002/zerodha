import React from 'react';
function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center mb-5' > 
                <h1 className='mt-5 mb-4  '>Charges</h1>
                <h3 className='text-muted'>List of all charges and taxes</h3>
             </div>
             <div className='row p-5 text-center'>
                <div className='col text-muted'>
                    <img src='pics/pricing0.svg' alt='pic' />
                    <h2 className='mb-4'>Free equity delivery
                    </h2>
                    <p  >All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p></div>
                <div className='col text-muted'>
                <img src='pics/image.png' alt='pic' />

                    <h2 className='mb-4'>Intraday and F&O trades
                    </h2>
                    <p  >Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p></div>
                <div className='col text-muted'>
                <img src='pics/pricingEquity.svg' alt='pic' />

                    <h2 className='mb-4'>Free direct MF
                    </h2>
                    <p   text-muted>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p></div>
             </div>


        </div>


    );
}

export default Hero;