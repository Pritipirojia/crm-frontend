import React, {useState} from 'react'

import './Entry.Style.css'
import {Container} from 'react-bootstrap'
import { LoginForm } from '../../Components/Login/Login.comp'
import { ResetPassword } from '../../Components/Password-Reset/PasswordReset.comp'

export const Entry = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad, setFrmLoad] = useState("login");
    
    const handleOnChange = e => {
        const {name, value} = e.target;

        switch(name){
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
        console.log(name,value)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log('Trigerred');

        if(!email || !password) {
            alert("Fill up all the form!");
        }
    };

    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        console.log('Trigerred');

        if(!email) {
            alert("Fill up all the form!");
        }
    };


    const formSwitcher = (frmType) => {
        setFrmLoad(frmType);
    }

    return (
        <div className='login-page bg-info'>
            <Container className='bg-white'>
                {frmLoad === 'login' && ( <LoginForm 
                handleOnChange = {handleOnChange}
                handleOnSubmit = {handleOnSubmit} 
                formSwitcher = {formSwitcher}
                email = {email}
                pass= {password}
                />
                )}
                {frmLoad === 'reset' && ( <ResetPassword 
                handleOnChange = {handleOnChange}
                handleOnResetSubmit = {handleOnResetSubmit}
                formSwitcher = {formSwitcher} 
                email = {email}
                />
                )}
            </Container>
        </div>
    )
}