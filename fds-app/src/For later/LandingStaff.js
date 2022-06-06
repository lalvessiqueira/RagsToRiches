import React,{useState} from 'react';
import {MDBTabs, MDBTabsItem, MDBTabsLink} from "mdb-react-ui-kit";
import Login from "./Login";
import Signup from "./Signup";

export default function LandingStaff() {

    const [loginOrRegister, setLoginOrRegister] = useState('login');
    const handleLoginOrRegister = (value: string) => {
        if (value === loginOrRegister) {
            return;
        }
        setLoginOrRegister(value);
    };

        return (
            <div className="maintainer">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-md-6 d-none d-md-flex bg-image"></div>
                        <div className="col-md-6 bg-right-color">
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">App title here</h3>
                                            <p className="text-muted mb-4 text-center">Some text here</p>
                                            <MDBTabs pills justify className='mb-3'>
                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleLoginOrRegister('login')}
                                                                 active={loginOrRegister === 'login'}>
                                                        LOGIN
                                                    </MDBTabsLink>
                                                </MDBTabsItem>
                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleLoginOrRegister('register')}
                                                                 active={loginOrRegister === 'register'}>
                                                        REGISTER
                                                    </MDBTabsLink>
                                                </MDBTabsItem>
                                            </MDBTabs>
                                            {loginOrRegister === "login" ? <Login loginOrRegister={loginOrRegister}/> :
                                                <Signup loginOrRegister={loginOrRegister}/>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
