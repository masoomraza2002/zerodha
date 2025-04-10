import React from 'react';

function Brokrage() {
    return (
        <div className="container p-5">
            <div className="row mb-4">
                <h1 className="text-center text-primary">Charges for Account Opening</h1>
            </div>
            <div className="border rounded p-4 shadow-sm bg-light">
                {/* Table Header */}
                <div className="row border-bottom pb-3 mb-2">
                    <div className="col-9">
                        <h5 className="text-muted">Type of Account</h5>
                    </div>
                    <div className="col-3">
                        <h5 className="text-muted">Charges</h5>
                    </div>
                </div>

                {/* Account Types and Charges */}
                <div className="mb-3">
                    <div className="row border p-3 rounded mb-2 bg-white">
                        <div className="col-9">
                            <h5 className="text-muted">Online Account</h5>
                        </div>
                        <div className="col-3 text-center">
                            <button 
                                className="btn btn-success text-white w-100"
                                style={{
                                    borderRadius: '20px',
                                    fontSize: '16px',
                                    transition: 'background-color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
                            >
                                Free
                            </button>
                        </div>
                    </div>

                    <div className="row border p-3 rounded mb-2 bg-white">
                        <div className="col-9">
                            <h5 className="text-muted">Offline Account</h5>
                        </div>
                        <div className="col-3 text-center">
                            <button 
                                className="btn btn-success text-white w-100"
                                style={{
                                    borderRadius: '20px',
                                    fontSize: '16px',
                                    transition: 'background-color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
                            >
                                Free
                            </button>
                        </div>
                    </div>

                    <div className="row border p-3 rounded mb-2 bg-white">
                        <div className="col-9">
                            <h5 className="text-muted">NRI Account (Offline Only)</h5>
                        </div>
                        <div className="col-3 text-center">
                            <h5 className="text-danger">Rs.500</h5>
                        </div>
                    </div>

                    <div className="row border p-3 rounded mb-2 bg-white">
                        <div className="col-9">
                            <h5 className="text-muted">Partnership, LLP, HUF, or Corporate Accounts (Offline Only)</h5>
                        </div>
                        <div className="col-3 text-center">
                            <h5 className="text-danger">Rs.500</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brokrage;
