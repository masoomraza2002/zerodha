import React from 'react';

function CreateTicket() {
    return (
        <div className='container p-5'>
            <div className='row p-5   text-muted'>
                <h3>To create a ticket, select a relevant topic</h3>
            </div>
            <div className='row p-5'>
                <div className='col-4'>
                    <h3 className='fs-5 mb-4 text-muted'><i class="fa-solid fa-circle-plus"></i> Account Opening</h3>
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Getting started</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Online</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Offline</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Charges</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Company, Partnership and HUF</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Non Resident Indian (NRI)</a><br />
                </div>
                <div className='col-4'>
                    <h3 className='fs-5 mb-4 text-muted'><i class="fa-regular fa-user"></i> Your Zerodha Account</h3>
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Login credentials</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Your Profile</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Account modification and segment addition</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>CMR & DP ID</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Nomination</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Transfer and conversion of shares</a><br />
                </div>
                <div className='col-4'>
                    <h3 className='fs-5 mb-4 text-muted'><i class="fa-solid fa-chart-simple"></i> Trading and Markets</h3>
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Trading FAQs</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Kite</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Margins</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Product and order types</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Corporate actions</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Kite features</a><br />
                </div>
            </div>
            <div className='row p-5'>
                <div className='col-4'>
                    <h3 className='fs-5 mb-4 text-muted'><i class="fa-solid fa-wallet"></i> Funds</h3>
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Fund withdrawal</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Adding funds</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2", lineHeight: "2" }} href=''>Adding bank accounts</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>eMandates</a><br />
                </div>
                <div className='col-4'>
                    <h3 className='fs-5 mb-4 text-muted'><i class="fa-solid fa-terminal"></i> Console</h3>
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>IPO</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Portfolio</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Funds statement</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Profile</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Reports</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Referral program</a><br />
                </div>
                <div className='col-4'>
                    <h3 className='fs-5 mb-4 text-muted'><i class="fa-solid fa-coins"></i> Coin</h3>
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Understanding mutual funds and Coin</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Coin app</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Coin web</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>Transactions and reports</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2" }} href=''>National Pension Scheme (NPS)</a><br />
                </div>
            </div>

        </div>

    );
}

export default CreateTicket;