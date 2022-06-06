import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer({setIsStaff}) {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <i className='fas fa-gem me-3'></i>
                                Rags to Riches
                            </h6>
                            <p>
                                A Non-profit-pending organization!
                                Saving all these PURRR-fect little animals.
                                DONATE NOW!
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    How to donate!
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Tiktok
                                </a>
                            </p>
                            <p>
                                <a href='' className='text-reset'>
                                    Instagram
                                </a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Staff Room</h6>
                            <p>
                                <a href='/staff' className='text-reset' onClick={setIsStaff(true)}>
                                    Staff login
                                </a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 pe-auto'>Contact</h6>
                            <p>
                                <i className='fas fa-home me-3'></i> Tampa, FL 37012, US
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                info@example.com
                            </p>
                            <p>
                                <i className='fas fa-phone me-3'></i> + 01 234 567 88
                            </p>
                            <p>
                                <i className='fas fa-print me-3'></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    );
}