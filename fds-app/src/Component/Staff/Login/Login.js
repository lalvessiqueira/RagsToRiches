import React, { Component } from 'react'
import Button from "bootstrap/js/src/button";
import {
    MDBTabsPane
} from 'mdb-react-ui-kit';
export default function Login({loginOrRegister}) {

    // const [loginOrRegister, setLoginOrRegister] = useState('login');
    // const handleLoginOrRegister = (value: string) => {
    //     if (value === loginOrRegister) {
    //         return;
    //     }
    //     setLoginOrRegister(value);
    // };
        return (
            <MDBTabsPane show={loginOrRegister === 'login'}>
            <form>
                <div className="mb-3">
                    <input id="inputEmail"
                           type="email"
                           placeholder="Email address"
                           required=""
                           autoFocus=""
                           className="form-control rounded-pill border-0 shadow-sm px-4"/>
                </div>
                <div className="mb-3">
                    <input id="inputPassword"
                           type="password"
                           placeholder="Password"
                           required=""
                           className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                </div>
                <div className="form-check">
                    <input id="customCheck1" type="checkbox" checked className="form-check-input"/>
                    <label form="customCheck1" className="form-check-label">Remember password</label>
                </div>
                <div className="d-grid gap-2 mt-2">
                    <button type="submit" onClick={window.location.href = "/staffDash"}
                            className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in
                    </button>
                </div>

                {/*<div className="text-center d-flex justify-content-between mt-4">*/}
                {/*    <p>Code by <a href="#" className="font-italic text-muted"> <u>Jessa</u></a></p>*/}
                {/*</div>*/}
            </form>
            </MDBTabsPane>
        )
}