import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Template, {FontStyle} from './0_Template';
import {darken, lighten} from 'polished';
import PassLock from './img/Password_lock.png';
import Passback from './img/Password_backspace.png'
import {FaMinus, FaCircle} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

//아이콘
export const Passwordlock = styled.img.attrs({
    src: PassLock
})`
    width: 91.8px;
    height: 105.1px;
    margin-top: 63.2px;
`;
//아이콘 밑에 있는 글
export const Passwordtext = styled(FontStyle) `
    width: 280px;
    height: 90px;
    margin-top: 30.7px;
    font-size: 30px;
    font-weight: bold;
    color: #61943e;
`;
//입력받는 큰 박스
export const PassBigBox = styled.div`
    width: 280px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;
//입력받는 작은 박스
export const PassSmallBox = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;
//입력받는 TEXT
export const PassSmallText = styled(FontStyle)`
    width: 40px;
    height: 40px;
    font-size: 30px;
`;
//버튼 큰 박스
export const PasswordButtonBigBox = styled.div`
    width: 285px;
    height: 215px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    margin-top: 33.5px;
`;
//버튼 중간박스
export const PasswordButtonMiddleBox = styled.div`
    width: 285px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
//버튼 작은 박스
export const PasswordButtonSmallBox = styled.div`
    width: 94px;
    height: 53px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 1px solid #707070;
    background-color: white;
    cursor: pointer;
    &:hover {
        background: ${lighten(0.1, '#fafafb')};
    }
    &:active {
        background: ${darken(0.1, '#fafafb')};
    }
`;
//버튼 텍스트
export const PasswordButtonText = styled.div`
    width: 55px;
    height: 30px;
    font-family: AppleSDGothicNeo;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #61943e;
`;
export const PassBack = styled.img.attrs({
    src: Passback
})`
    width: 38.2px;
    height: 30px;
`;
//저작권 박스
export const CopyrightBox = styled.div`
    width: 328px;
    height: 12px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
//저작권
export const Copyright = styled(FontStyle)`
    font-size: 10px;
    font-weight: 100;
    text-align: center;
    color: black;
`;

function PasswordSetting () {
    //const [number, setNumber] = useState('');
    
    /*const onNumberClick = e => {
        setNumber.concat(e.target.value);
    }

    const onNumberRemove = () => {
        setNumber = setNumber.slice(0, -1);
        console.log(setNumber);
    }*/
    let number = 0;

    /*const onNumberClick = useEffect((FaCircle) => {
        number += 1;
        var stringnumber=String(number);
        if(FaCircle.name === stringnumber){
            return () => {
                FaCircle.style.opacity='1';
            };
        }
        return () => {
        };
    }, [FaCircle])*/

    return (
        <Template>
            <NavLink to='/HomeMultipleCandidate'><Passwordlock /></NavLink>
            <Passwordtext>비밀번호 6자리를<br></br>입력해주세요</Passwordtext>
            <PassBigBox>
                <PassSmallBox>
                    <PassSmallText>{<FaCircle name='1' color='61943e' style={{opacity:0}}/>}</PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle name='2' color='61943e' style={{opacity:0}}/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle name='3' color='61943e' style={{opacity:0}}/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle name='4' color='61943e' style={{opacity:0}}/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle name='5' color='61943e' style={{opacity:0}}/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle name='6' color='61943e' style={{opacity:0}}/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
            </PassBigBox>
            <PasswordButtonBigBox>
                <PasswordButtonMiddleBox>
                    <PasswordButtonSmallBox value={'1'}>
                        <PasswordButtonText>1</PasswordButtonText>
                    </PasswordButtonSmallBox >
                    <PasswordButtonSmallBox value={'2'} >
                        <PasswordButtonText>2</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox value={'3'} >
                        <PasswordButtonText>3</PasswordButtonText>
                    </PasswordButtonSmallBox>
                </PasswordButtonMiddleBox>
                <PasswordButtonMiddleBox>
                    <PasswordButtonSmallBox value={'4'}>
                        <PasswordButtonText>4</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox value={'5'} >
                        <PasswordButtonText>5</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox value={'6'} >
                        <PasswordButtonText>6</PasswordButtonText>
                    </PasswordButtonSmallBox>
                </PasswordButtonMiddleBox>
                <PasswordButtonMiddleBox>
                    <PasswordButtonSmallBox value={'7'} >
                        <PasswordButtonText>7</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox value={'8'} >
                        <PasswordButtonText>8</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox value={'9'} >
                        <PasswordButtonText>9</PasswordButtonText>
                    </PasswordButtonSmallBox>
                </PasswordButtonMiddleBox>
                <PasswordButtonMiddleBox>
                    <PasswordButtonSmallBox style={{backgroundColor:'gray'}}>
                        <PasswordButtonText></PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox value={'0'} >
                        <PasswordButtonText>0</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox style={{backgroundColor:'gray'}} >
                        <PasswordButtonText><PassBack /></PasswordButtonText>
                    </PasswordButtonSmallBox>
                </PasswordButtonMiddleBox>
            </PasswordButtonBigBox>
        </Template>
    );
}

export default PasswordSetting;