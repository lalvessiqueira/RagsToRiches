import React, {useState} from 'react';
import axios from "axios";
import {MDBBtn, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import FileBase64 from "react-file-base64";

export default function ImageUploader() {
    const [item, setItem] = useState({ title: '', image: [] });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(item)
        axios.post('http://localhost:8093/image/add', item).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    const getFiles = (files) => {
        let image_arr = [];
        for (let i = 0; i < files.length; i++) {
            image_arr.push(files[i].base64)
        }
        setItem({...item, image: image_arr })
    }

    return(
        <MDBContainer className="col-md-6">
        {/*//     <img src='https://images.unsplash.com/photo-1623862334741-6822d5232389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'*/}
        {/*//          className='img-fluid shadow-4 mt-4'*/}
        {/*//          alt='...'/>*/}
            <form className='py-1' onSubmit={onSubmitHandler}>
                <MDBInput wrapperClass='mb-4'
                          id="title"
                          label='Image Label'
                          name="title"
                          value={item.title}
                          onChange={e => setItem({ ...item, title: e.target.value })}>
                </MDBInput>
                <FileBase64
                    wrapperClass='mb-4 mt-4'
                    type="image"
                    multiple={true}
                    onDone = {getFiles.bind(this)}
                    // onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                />
                <div className='mb-4'></div>
                {/*<MDBBtn type='submit' className='mb-4'>*/}
                {/*    Submit*/}
                {/*</MDBBtn>*/}
            </form>
        </MDBContainer>

    )
}