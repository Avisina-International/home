import React from "react"
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import "../App.css";

const Footer = (props) => {
 const navigate = useNavigate();
    return (
    <section>
        <div className="">
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#246B91' }}>
                <section className="d-flex justify-content-between p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div className="Footer--Icons">
                        <a href="https://instagram.com" className="text-white me-4">
                            <FaInstagram />
                        </a>
                        <a href="https://whatsapp.com" className="text-white me-4">
                            <FaWhatsapp />
                        </a>
                        <a href="https://linkedin.com" className="text-white me-4">
                            <FaLinkedinIn /> 
                        </a>
                        <a href="https://facebook.com" className="text-white me-4">
                            <FaFacebook />
                        </a>
                    </div>
                </section>

                <section>
                    <div className="Footer--Container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Avisina International</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#86b2ca', height: '2px' }} />
                                <p>
                                    Selling top quality surgical item worldwide. We aim to be the biggest surgical tool provider in the Asian community.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p>
                                    <a onClick={() => navigate('/page-not-found')} className="text-white">Barbery Catalogue</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p>
                                    <a onClick={() => navigate('/page-not-found')} className="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a onClick={() => navigate('/page-not-found')} className="text-white">Members Area</a>
                                </p>
                                <p>
                                    <a onClick={() => navigate('/page-not-found')} className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a onClick={() => navigate('/page-not-found')} className="text-white">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p><i className="fas fa-home mr-3"></i> Sialkot, Punjab, Pakistan</p>
                                <p><i className="fas fa-envelope mr-3"></i> avisina.international@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 92 310 628 8069</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright: 
                    <a className="text-white" href="https://mdbootstrap.com/">Avisina International</a>
                </div>
            </footer>
        </div>
    </section>
  )
};

export default Footer;
