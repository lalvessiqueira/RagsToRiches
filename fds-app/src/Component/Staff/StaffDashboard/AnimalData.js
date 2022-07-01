import React, {Component} from 'react';
import {
    MDBBtn,
    MDBCol, MDBContainer,
    MDBRow,
    MDBSwitch
} from "mdb-react-ui-kit";
import axios from "axios";
import higiphy from "../../../Icons/hi.gif";


class AnimalData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            moreaccounts: [],
            staffname: "Leticia"
        };
    }

 

    // componentDidMount() {
    //     axios.get("http://localhost:8081/api/customer/username/" + localStorage.getItem("username"))
    //         .then((response) => {
    //             this.setState({accounts: response.data.accounts[0]})
    //             this.setState({moreaccounts: response.data.accounts})
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }

    render() {
        return (
            <div>
            <h1>Welcome, {this.state.staffname}</h1>
                <img 
                    src={higiphy}
                // src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                     className='img-fluid shadow-2-strong' 
                     alt='' 
                     style={{ maxWidth: '24rem' }}/>
                
                {/*{this.state.moreaccounts?.map(account =>*/}
                {/*    <MDBContainer id='bg-glass' className='py-3 rounded-5 col-10 my-3'>*/}
                {/*        /!*<h1>HEY</h1>*!/*/}
                {/*        <MDBRow className='mb-2'>*/}
                {/*            <MDBCol>*/}
                {/*                Account Type: {account.accountType}*/}
                {/*            </MDBCol>*/}
                {/*        </MDBRow>*/}

                {/*        <MDBRow className='mb-2'>*/}
                {/*            <MDBCol>*/}
                {/*                Balance: {account.accountBalance}*/}
                {/*            </MDBCol>*/}
                {/*        </MDBRow>*/}
                {/*        <MDBRow className='d-flex justify-content-center mt-4'>*/}
                {/*            <MDBCol className='col-5'>*/}
                {/*                <MDBSwitch label='Disable/Enable' defaultChecked />*/}
                {/*            </MDBCol>*/}
                {/*            <MDBCol className='col-4'>*/}
                {/*                <MDBBtn type='submit' size='sm'>View More</MDBBtn>*/}
                {/*            </MDBCol>*/}
                {/*        </MDBRow>*/}
                {/*    </MDBContainer>*/}
                {/*    )}*/}
            </div>


            // <div>

            // </div>
        );
    }
}

export default AnimalData;