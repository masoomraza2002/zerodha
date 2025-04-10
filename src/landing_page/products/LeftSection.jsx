import React from 'react';

function LeftSection({ logo, heading, description, link1, link2, img1, img2 }) {
    return (
        <div className='container mt-5 p-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={logo} alt='Logo' className="img-fluid" />
                </div>
                <div className='col-6 mt-5 p-5'>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                    <div className='row'>
                        <div className='col'>
                            {link1 ? (
                                <a style={{ textDecoration: "none", color: "black" }} href=''>
                                    {link1}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            ) : null}                        </div>
                        <div className='col'>
                            {link2 ? (
                                <a style={{ textDecoration: "none", color: "black" }} href=''>
                                    {link2}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            ) : null}                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <a style={{ textDecoration: "none", color: "black" }} href=''>
                                <img src={img1} alt="Google Play" className="img-fluid" />
                            </a>
                        </div>
                        <div className='col'>
                            <a style={{ textDecoration: "none", color: "black" }} href=''>
                                <img src={img2} alt="App Store" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
