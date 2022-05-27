import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import {MDBTabs, MDBTabsItem, MDBTabsLink} from "mdb-react-ui-kit";
function App() {

    const [loginOrRegister, setLoginOrRegister] = useState('login');
    const handleLoginOrRegister = (value: string) => {
        if (value === loginOrRegister) {
            return;
        }
        setLoginOrRegister(value);
    };

    return (

        <div className="maintainer">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="col-md-6 d-none d-md-flex bg-image"></div>
                    <div class="col-md-6 bg-light">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-10 col-xl-7 mx-auto">
                                        <h3 class="display-4">App title here</h3>
                                        <p class="text-muted mb-4 text-center">Some text here</p>
                                        <MDBTabs pills justify className='mb-3'>
                                            <MDBTabsItem>
                                                <MDBTabsLink onClick={() => handleLoginOrRegister('login')} active={loginOrRegister === 'login'}>
                                                    LOGIN
                                                </MDBTabsLink>
                                            </MDBTabsItem>
                                            <MDBTabsItem>
                                                <MDBTabsLink onClick={() => handleLoginOrRegister('register')} active={loginOrRegister === 'register'}>
                                                    REGISTER
                                                </MDBTabsLink>
                                            </MDBTabsItem>
                                        </MDBTabs>
                                        <Login loginOrRegister={loginOrRegister}/>
                                        <Signup loginOrRegister={loginOrRegister}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App