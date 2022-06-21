import React, {useEffect, useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBContainer,
    MDBCol,
    MDBRow, MDBCardSubTitle, MDBCardLink, MDBListGroup, MDBListGroupItem, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';
import cats from "../AnimalList";
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";
import FileBase64 from "react-file-base64";
import ProfileForm from "../Form/ProfileForm";

export default function EditAnimal() {

    const [animal, setAnimal] = useState("");
    const default_image = "https://genesisairway.com/wp-content/uploads/2019/05/no-image.jpg";

    useEffect(() => {
        fetchData();
        // console.log(animal)
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8093/animals/retrieve/" + localStorage.getItem("id"))
            .then((response) => {
                console.log(response.data)
                setAnimal(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8093/animal/update/" + localStorage.getItem("id"), animal).then(response => {
            console.log(response)
            console.log("Animal updated")
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <div>
            <MDBBtn onClick={() => console.log(animal)}>Animal</MDBBtn>
            <MDBContainer className="mb-3">
                <MDBCard className="profile-form">
                    <div className="p-3">
                        <h3 className="text-uppercase">Create Purr profile</h3>
                        <form id='add-purr' onSubmit={submitHandler} className='py-2'>
                            <figure className='figure' style={{ maxWidth: '22rem' }}>
                                <img
                                    // src= {animal.profilePicture == null ? animal.profilePicture?.image[0] : default_image}
                                    src= {default_image}
                                    className='figure-img img-fluid rounded shadow-3'
                                    alt='...'
                                />
                            </figure>

                            {/*Add Profile picture*/}
                            <MDBContainer className="col-md-6">
                                <MDBInput wrapperClass='mb-4'
                                          id="profileTitle"
                                          label='Image Tag'
                                          name="title"
                                          // value={animal.profilePicture?.title}
                                          // onChange={e => setAnimal({ ...animal.profilePicture, title: e.target.value })}
                                >
                                </MDBInput>
                                <FileBase64
                                    wrapperClass='mb-4 mt-4'
                                    type="image"
                                    multiple={true}
                                    // onDone = {getFilesProfile.bind(this)}
                                    // onDone={({ base64 }) => setProfilePicture({ ...profilePicture, image: base64 })}
                                />
                                <div className='mb-4'></div>
                            </MDBContainer>


                            <section className='d-flex justify-content-center justify-content-lg-between mb-3 border-bottom'></section>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4'
                                              id='name'
                                              label='Name'
                                              name="name"
                                              value={animal.name}
                                              onChange={(e) =>
                                                  setAnimal({...animal, name: e.target.value})}
                                        />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4'
                                              id='breed'
                                              label='Breed'
                                              type='text'
                                              name="breed"
                                              value={animal.breed}
                                              onChange={(e) =>
                                                  setAnimal({...animal, breed: e.target.value})}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <select
                                        className="form-select mb-4"
                                        aria-label="Sex"
                                        name="sex"
                                        value={animal.sex}
                                        onChange={(e) =>
                                            setAnimal({...animal, sex: e.target.value})}>
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
                                              value={animal .weight}
                                              onChange={(e) =>
                                                  setAnimal({...animal, weight: e.target.value})}/>
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4'
                                              id='age'
                                              label='Age'
                                              type='text'
                                              name="age"
                                              value={animal.age}
                                              onChange={(e) =>
                                                  setAnimal({...animal, age: e.target.value})}/>
                                </MDBCol>
                            </MDBRow>

                            <section className='d-flex justify-content-center justify-content-lg-between mb-3 border-bottom'></section>

                            {/*<MDBRow className="mb-2">*/}
                            {/*    {item.image?.map(image =>*/}
                            {/*        <MDBCol className="mb-2">*/}
                            {/*            <img*/}
                            {/*                src= {image}*/}
                            {/*                className='img-thumbnail'*/}
                            {/*                alt='...'*/}
                            {/*                style={{ maxWidth: '14rem' }}*/}
                            {/*            />*/}
                            {/*        </MDBCol>*/}
                            {/*    )}*/}
                            {/*</MDBRow>*/}

                            {/*<SimpleImageSlider*/}
                            {/*    width={270}*/}
                            {/*    height={270}*/}
                            {/*    images={animal.photos.image}*/}
                            {/*    showBullets={true}*/}
                            {/*    showNavs={true}*/}
                            {/*/>*/}

                            {/*Upload multiple images*/}
                            <MDBContainer className="col-md-6">
                                <MDBInput wrapperClass='mb-4'
                                          id="title"
                                          label='Image Label'
                                          name="title"
                                          // value={animal.photos.title}
                                          // onChange={e => setAnimal({ ...animal.photos, title: e.target.value })}
                                >
                                </MDBInput>
                                <FileBase64
                                    wrapperClass='mb-4 mt-4'
                                    type="image"
                                    multiple={true}
                                    // onDone = {getFiles.bind(this)}
                                />
                                <div className='mb-4'></div>
                            </MDBContainer>

                            <MDBBtn type='submit' form='add-purr' className='mb-4'>
                                Submit
                            </MDBBtn>
                        </form>
                    </div>
                </MDBCard>
            </MDBContainer>

        </div>
    )
}