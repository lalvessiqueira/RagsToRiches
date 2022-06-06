import React, {useState} from 'react';
import {
    MDBInput,
    MDBContainer,
    MDBBtn,
    MDBCard,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
import axios from "axios";
import ImageUploader from "./ImageUploader";
import "./ProfileForm.css"
import CompDivider from "../../Add-Ons/CompDivider";

export default function ProfileForm() {

    const [details, setDetails] = useState(
        {
            animalId: '',
            name : '',
            breed: '',
            sex: '',
            age : '',
            weight : '',
        }
    );

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(details)
        axios.post('http://localhost:8093/animals/add', details).then(response => {
            console.log(response)
            setDetails({...details, animalId: response.data.id})
            // localStorage.setItem("animalId", response.data.id)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <MDBContainer className="mb-3">
            <MDBCard className="profile-form">
                <div className="p-3">
                    <h3 className="text-uppercase">Create Purr profile</h3>
                    <form onSubmit={submitHandler} className='py-2'>
                        <figure className='figure' style={{ maxWidth: '22rem' }}>
                            <img
                                src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                className='figure-img img-fluid rounded shadow-3'
                                alt='...'
                            />
                        </figure>
                        <ImageUploader/>
                        <CompDivider/>
                        <MDBRow>
                            <MDBCol>
                                <MDBInput wrapperClass='mb-4'
                                          id='name'
                                          label='Name'
                                          name="name"
                                          value={details.name}
                                          onChange={(e) =>
                                              setDetails({...details, name: e.target.value})}/>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput wrapperClass='mb-4'
                                          id='breed'
                                          label='Breed'
                                          type='text'
                                          name="breed"
                                          value={details.breed}
                                          onChange={(e) =>
                                              setDetails({...details, breed: e.target.value})}/>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput wrapperClass='mb-4'
                                          id='weight'
                                          label='Weight'
                                          type='text'
                                          name="weight"
                                          value={details.weight}
                                          onChange={(e) =>
                                              setDetails({...details, weight: e.target.value})}/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <select
                                    className="form-select mb-4"
                                    aria-label="Sex"
                                    name="sex"
                                    value={details.sex}
                                    onChange={(e) =>
                                        setDetails({...details, sex: e.target.value})}>
                                    <option selected>Select Sex</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput wrapperClass='mb-4'
                                          id='weight'
                                          label='Weight'
                                          type='text'
                                          name="weight"
                                          value={details.weight}
                                          onChange={(e) =>
                                              setDetails({...details, weight: e.target.value})}/>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput wrapperClass='mb-4'
                                          id='age'
                                          label='Age'
                                          type='text'
                                          name="age"
                                          value={details.age}
                                          onChange={(e) =>
                                              setDetails({...details, age: e.target.value})}/>
                            </MDBCol>
                        </MDBRow>
                        <CompDivider/>
                        <MDBRow className="mb-2">
                            <MDBCol className="mb-2">
                                <img
                                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                    className='img-thumbnail'
                                    alt='...'
                                    style={{ maxWidth: '14rem' }}
                                />
                            </MDBCol>
                            <MDBCol className="mb-2">
                                <img
                                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                    className='img-thumbnail'
                                    alt='...'
                                    style={{ maxWidth: '14rem' }}
                                />
                            </MDBCol>
                            <MDBCol className="mb-2">
                                <img
                                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                    className='img-thumbnail'
                                    alt='...'
                                    style={{ maxWidth: '14rem' }}
                                />
                            </MDBCol>
                            <MDBCol className="mb-2">
                                <img
                                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                    className='img-thumbnail'
                                    alt='...'
                                    style={{ maxWidth: '14rem' }}
                                />
                            </MDBCol>
                        </MDBRow>
                        <ImageUploader/>
                        <MDBBtn type='submit' className='mb-4'>
                            Submit
                        </MDBBtn>
                    </form>
                </div>
            </MDBCard>
        </MDBContainer>
    );

}