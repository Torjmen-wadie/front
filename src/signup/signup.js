import axios from 'axios'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
  }
    from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/users', {
                userName,
                email,
                password
            });
            if (response.status === 201) {
                const responseLogin = await axios.post("http://localhost:4000/auth", {
                    email,
                    password
                });

                localStorage.setItem('token', responseLogin.data);

                const info = await axios.get("http://localhost:4000/auth/getme/me", {
                    headers: { Authorization: 'Bearer ' + responseLogin.data }
                })
                navigate('/');
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <MDBContainer fluid className='my-5' style={{ width: "60%" }}>
                <MDBRow className='g-0 align-items-center'>
                    <MDBCol col='6'>

                        <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>

                            <MDBCardBody className='p-5 shadow-5 text-center'>

                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form onSubmit={handleSignUp} >
                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='userName' id='form1' type='text' onChange={(e)=>setUserName(e.target.value)} />
                                    </MDBCol>

                                   
                                </MDBRow>

                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(e)=>setEmail(e.target.value)}/>
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={(e)=>setPassword(e.target.value)} />

                                <div className='d-flex justify-content-center mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                </div>

                                <MDBBtn className='w-100 mb-4' size='md' type="submit" onSubmit={handleSignUp}>sign up</MDBBtn>
                                </form>

                                <div className="text-center">

                                    <p>or sign up with:</p>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>

                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol col='6'>
                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
                            alt="" fluid />
                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    )
}
