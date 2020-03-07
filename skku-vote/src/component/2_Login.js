import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Template, { FontStyle } from './0_Template';
import Login_logo from "./img/Login_logo.png";

const LoginLogo = styled.img.attrs({
    src: Login_logo
})
`
    width: 216px;
    height: 156px;
    margin-top: 105px;
`;

const LoginButton = styled(FontStyle)`
    width: 200px;
    height: 53px;
    margin-top: 192px;
    margin-bottom: 100px;
    border-radius: 16px;
    border: 1px solid #314e49;
    background: #314e49;
    font-size: 20px;
    font-weight: 800;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Login() {
    return ( 
        <Template >
            <LoginLogo />
            <LoginButton ><NavLink to='/PasswordSetting' style={{color:'white', textDecoration: 'none'}}>GLS 계정으로 시작</NavLink></LoginButton>
        </Template>
    );
}

export default Login;