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
import axios from "axios";
import FileBase64 from "react-file-base64";


export default function EditAnimal() {

    const [animal, setAnimal] = useState("");
    const default_image = "https://genesisairway.com/wp-content/uploads/2019/05/no-image.jpg";
    const [profilePicture, setProfilePicture] = useState("");
    const [item, setItem] = useState("");
    
    useEffect(() => {
        fetchData();
        // console.log(animal)
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8093/animals/retrieve/" + localStorage.getItem("id"))
            .then((response) => {
                // console.log(response.data)
                setProfilePicture(response.data.profilePicture)
                setAnimal(response.data)
                setItem(response.data.photos)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8093/animal/update/" + localStorage.getItem("id"), animal).then(response => {
                console.log(response)
                let saveResponse = response.data
                axios.post("http://localhost:8093/animal/insert-profile-image/" + response.data.id, profilePicture).then(response => {
                    console.log("animals/insert-profile-image - response")
                    console.log(response)
                    axios.post("http://localhost:8093/animal/insert-image/"+ saveResponse.id, item).then(response => {
                        console.log("animals/insert-image - response")
                        console.log(response)
                        }).catch(error => {
                            console.log("animals/update/insert-image - error: " + saveResponse.id)
                            console.log(error)
                        })
                }).catch(error => {
                    console.log("animals/update/insert-profile-image - error")
                    console.log(error)
            })

        }).catch(error => {
            console.log(error)
        })        
    }

    const getFilesProfile = (files) => {
        let image_arr = [];
        for (let i = 0; i < files.length; i++) {
            image_arr.push(files[i].base64)
        }
        setProfilePicture({...profilePicture, image: image_arr })
    }

    const getFiles = (files) => {
        let image_arr = [];
        for (let i = 0; i < files.length; i++) {
            image_arr.push(files[i].base64)
        }
        setItem({...item, image: image_arr })
    }

    return (
        <div>
            <MDBBtn onClick={() => {
                console.log(animal)
                // console.log(profilePicture)
                // console.log(item)
                }}>Animal</MDBBtn>
            <MDBContainer className="mb-3">
                <MDBCard className="profile-form">
                    <div className="p-3">
                        <h3 className="text-uppercase">Edit Purr profile</h3>
                        <form id='add-purr' onSubmit={submitHandler} className='py-2'>
                            <figure className='figure' style={{ maxWidth: '22rem' }}>
                                <img
                                    src= {profilePicture == null ? default_image : profilePicture.image?.map((pic) => pic)}
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
                                          value={profilePicture == null ? "" : profilePicture?.title}
                                          onChange={e => setProfilePicture({ ...profilePicture, title: e.target.value })}
                                >
                                </MDBInput>
                                <FileBase64
                                    wrapperClass='mb-4 mt-4'
                                    type="image"
                                    multiple={true}
                                    onDone = {getFilesProfile.bind(this)}
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

                            <MDBRow className="mb-2">
                               {item.image?.map(image =>
                                   <MDBCol className="mb-2">
                                       <img
                                           src= {image}
                                           className='img-thumbnail'
                                           alt='...'
                                           style={{ maxWidth: '14rem' }}
                                       />
                                   </MDBCol>
                               )}
                            </MDBRow>

                            {/*Upload multiple images*/}
                            <MDBContainer className="col-md-6">
                                <MDBInput wrapperClass='mb-4'
                                          id="title"
                                          label='Image Label'
                                          name="title"
                                          value={item.title}
                                          onChange={e => setItem({ ...item, title: e.target.value })}
                                >
                                </MDBInput>
                                <FileBase64
                                    wrapperClass='mb-4 mt-4'
                                    type="image"
                                    multiple={true}
                                    onDone = {getFiles.bind(this)}
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