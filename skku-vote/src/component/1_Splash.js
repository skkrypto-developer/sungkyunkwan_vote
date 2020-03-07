import React from 'react';
import styled from 'styled-components';
import splash from './img/Splash.png';
import {NavLink} from 'react-router-dom';

const SplashPicture = styled.img.attrs({
    src: splash
})`
    width: 360px;
    height: 100%;
    transition: all .3s;

    position: relative;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

function Splash() {
    return <NavLink to="/Login"><SplashPicture /></NavLink>
}

export default Splash;