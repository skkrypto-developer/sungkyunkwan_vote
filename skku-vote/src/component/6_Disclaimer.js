import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Template, {FontStyle} from './0_Template';
import {VoteLogo, Confirm} from './5_How_To_Vote';

const OnlineBox = styled.div`
    width: 323px;
    height: 218px;
    background-color: #e2e2e2;
    margin-top: 28px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const OnlineGuide = styled(FontStyle)`
    width: 200px;
    height: 24px;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.19;
    color: #637fa8;
    margin-top: 14px;
`;

const DisclaimerText = styled(FontStyle)`
    width: 237px;
    height: 24px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
    color: #000000;
    margin-top: 26px;
    margin-bottom: 28px;
`;

const Confirmbox = styled.div`
    width: 200px;
    height: 53px;
    border-radius: 16px;
    border: 1px solid #314e49;
    background-color: #314e49;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Council = styled(FontStyle)`
    width: 237px;
    height: 39px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
    color: #61943e;
    margin-top: 21px;
    margin-bottom: 25px;
`;

function Disclaimer () {
    return (
        <Template>
            <VoteLogo />
            <OnlineBox>
                <OnlineGuide>온라인 투표시 준수사항</OnlineGuide>
            </OnlineBox>
            <DisclaimerText>위의 사항에 대해 동의합니다.</DisclaimerText>
            <Confirmbox>
                <Confirm><NavLink to='/HomeMultipleCandidate' style={{color:'white', textDecoration: 'none'}}>확인</NavLink></Confirm>
            </Confirmbox>
            <Council>성균관대학교 소프트웨어대학<br></br>선거관리 위원회</Council>
        </Template>

    );
}

export default Disclaimer;