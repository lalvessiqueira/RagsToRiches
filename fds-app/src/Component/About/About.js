import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox} from 'mdb-react-ui-kit';

export default function About() {
    return (
        <div>
        <section className='d-flex justify-content-center p-4'>
        </section>
            <MDBRow className='ps-5'>
                <MDBCol lg='4' md='12' className='mb-4'>
                    <figure className='figure' style={{ maxWidth: '22rem' }}>
                        <img
                            src='https://images.unsplash.com/photo-1530442674825-b4f6c21fdefe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwc2hlbHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'
                            className='figure-img img-fluid rounded shadow-3 mb-3'
                            alt='...'
                        />
                        <figcaption className='figure-caption'>A caption for the above image.</figcaption>
                    </figure>
                </MDBCol>

                <MDBCol lg='4' md='6' className='mb-4'>
                    <figure className='figure' style={{ maxWidth: '22rem' }}>
                        <img
                            src='https://images.unsplash.com/photo-1625107012478-2fb7eceb7577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdCUyMHNoZWx0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
                            className='figure-img img-fluid rounded shadow-3 mb-3'
                            alt='...'
                        />
                        <figcaption className='figure-caption'>A caption for the above image.</figcaption>
                    </figure>
                </MDBCol>

                <MDBCol lg='4' md='6' className='mb-4'>
                    <figure className='figure' style={{ maxWidth: '22rem' }}>
                        <img
                            src='https://images.unsplash.com/photo-1625106828405-07e0e4457c1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                            className='figure-img img-fluid rounded shadow-3 mb-3'
                            alt='...'
                        />
                        <figcaption className='figure-caption'>A caption for the above image.</figcaption>
                    </figure>
                </MDBCol>
            </MDBRow>
        </div>
    );
}