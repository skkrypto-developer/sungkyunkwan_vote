import React, {useState} from 'react';
import {FaBars, FaUserAlt} from 'react-icons/fa';
import styled, {css} from 'styled-components';
import {NavLink, Route} from 'react-router-dom';
import {FontStyle} from './0_Template';

const size = {
    mobile: '425',
    tablet: '768',
    laptop: '1024',
    desktop: '2560'
}

const media = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${size[label] / 16}em) {
        ${css(...args)};
      }
    `;
  
    return acc;
  }, {});


const TemplateBlock = styled.div `
    width: 360px;
    ${media.mobile`width: mobile;`}
    ${media.tablet`width: 360px;`}
    ${media.laptop`width: 360px;`}
    height: 100%;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    transition: all .3s;
`;

//저작권 박스
const CopyrightBox = styled.div`
    width: 328px;
    height: 3%;
    display: inline-flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 22px;
`;
//저작권
const Copyright = styled(FontStyle)`
    font-size: 10px;
    font-weight: 100;
    text-align: center;
    color: black;
`;

const HeadBox = styled.div`
    margin: 0 auto;
    justify-self: flex-start;
    width: 349px;
    height: 15%;
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: white;
    margin-top: 10px;
`;

const MenuBox = styled.div`
    position: absolute;
    width: 200px;
    min-height: 100%;

    border: 1px solid #707070;
    background-color: white;
    z-index: 3;
    transition: all 1s;

    align-self:stretch;
    justify-self: flex-start;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

const MenuText = styled(FontStyle)`
    width: 126px;
    height: 42px;
    font-size: 20px;
    font-weight: bold;
    color: #61943e;
`;

const MenuButtonBox = styled.button`
    outline: none;
    border: none;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


function HeadTemplate ({children}) {
    const [open, setOpen] = useState(false);
    const [visible, setVisibel] = useState('hidden');
    const onToggle = () => {
        setOpen(!open);
        setVisibel(!visible);
    }
    return(
        <TemplateBlock>
            <HeadBox>
                <MenuButtonBox style={{marginRight:113}} onClick={onToggle} open={open}><FaBars style={{width:32, height:32}} /></MenuButtonBox>
                <MenuButtonBox style={{marginLight:113}}><NavLink to='/MyPage' style={{color:'black', textDecoration: 'none'}}><FaUserAlt style={{width:27, height:27, marginLeft:113}} /></NavLink></MenuButtonBox>
            </HeadBox>
            {open && 
            (
            <MenuBox>
                    <MenuButtonBox style={{marginLeft:150}} onClick={onToggle} open={open}><FaBars style={{width:32, height:32}} /></MenuButtonBox>
                    <NavLink to='/HomeMultipleCandidate' style={{color:'#61943e', textDecoration: 'none', marginTop: 92}}><MenuText>투표하기</MenuText></NavLink>
                    <NavLink to='/HomePromimse' style={{color:'#61943e', textDecoration: 'none', marginTop: 21}}><MenuText >공약확인</MenuText></NavLink>
            </MenuBox>
            )}
            {children}    
            <CopyrightBox>
                <Copyright> Copyright 2020 Sungkyunkwan Universtity allrights reserved </Copyright>
            </CopyrightBox>
        </TemplateBlock>
    );
}

export default HeadTemplate;