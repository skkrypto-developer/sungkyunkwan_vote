import React, {useState} from 'react';
import styled from 'styled-components';
import {FontStyle} from './0_Template';
import HeadTemplate from './0.1_Head';
import Modal from './0.2_Modal';
import {ConfirmBox, Confirm} from './5_How_To_Vote';
import Skkulogo from './img/Skku_logo.png';
import {NavLink} from 'react-router-dom';

const TitleText = styled(FontStyle)`
    width: 330px;
    height: 4.5%;
    font-size: 20px;
    font-weight: bold;
    color: #61943e;
    float: center;
`;

const TitleLaterText = styled(FontStyle)`
    width: 330px;
    height: 15%;
    font-size: 20px;
    font-weight: bold;
    color: #61943e;
    float: center;
`;

const TextBox = styled.div`
    width: 264px;
    height: 50%;
    border-radius: 28px;
    border: 1px solid #707070;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 6px;
`;

const Text = styled(FontStyle)`
    width: 200px;
    height: 30%;
    font-weight: 600;
    color: #000000;
`;

const PicBox = styled.div`
    width: 150px;
    height: 36px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
`;

const SkkuLogo = styled.img.attrs({
    src: Skkulogo
})`
    width: 31px;
    height: 36px;
    object-fit: contain;
`;

function MyPage() {
    return (
        <HeadTemplate>
            <TitleText style={{marginTop:30, marginBottom:10}}>My Page</TitleText>
            <TextBox>
                <Text style={{marginTop:10, fontSize:20}}>OOO 님</Text>
                <TitleText style={{marginTop:10}}>토큰</TitleText>
                <PicBox style={{marginTop:10}}>
                    <SkkuLogo />
                    <Text style={{fontSize:16, alignSelf: 'center'}}>
                        200 SKKUT
                    </Text>
                </PicBox>
                <TitleText style={{marginTop:10}}>선거정보</TitleText>
                <Text style={{marginTop:10, fontSize:16}}>Tx hash</Text>
                <Text style={{marginTop:10, fontSize:12}}>투표가 끝난후 해당 주소를 통해<br></br>당신의 투표를 확인해 보세요</Text>
                <ConfirmBox style={{marginBottom:10}}>
                    <Confirm ><NavLink to='/PasswordConfirmation' style={{color:'white', textDecoration: 'none'}}>보상받기</NavLink></Confirm>
                </ConfirmBox>
            </TextBox>
            <TitleLaterText style={{marginTop:15}}>
                보상받는 방법<br></br>
                1. 학생회실로 간다<br></br>
                2. 보상받기를 클릭한다.<br></br>
                3. 비밀번호 입력 후 보상을 받는다.    
            </TitleLaterText>
        </HeadTemplate>
    );
}

export default MyPage;