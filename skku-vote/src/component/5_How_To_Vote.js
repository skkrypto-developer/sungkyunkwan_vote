import React from 'react';
import styled from 'styled-components';
import {NavLink, Route} from 'react-router-dom';
import Template, {FontStyle} from './0_Template';
import Votelogo from './img/Skku_logo.png';
import Electionlogo from './img/Election_logo.png';


export const VoteLogo = styled.img.attrs({
    src: Votelogo
})`
    width: 54.5px;
    height: 64px;
    margin-top: 80px;
`;

const VoteDate = styled(FontStyle)`
    width: 237px;
    height: 24px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
    color: #000000;
    margin-top: 14px;
`;

const GuideBox = styled.div`
    width: 340px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Guide = styled(FontStyle)`
    width: 50%;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #61943e;
    margin-top: 14px;
`;

const ElectionLogo = styled.img.attrs({
    src: Electionlogo
})`
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-left: 5px;
    margin-top: 10px;
`;

const GuideLineBox = styled.div`
    width: 300px;
    height: 180px;
    border-radius: 33px;
    border: 1px solid #d7ddd3;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`;

const GuideLine = styled(FontStyle)`
    width: 279px;
    height: 144px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
    color: #000000;
`;

export const ConfirmBox = styled.div`
    width: 200px;
    height: 53px;
    border-radius: 16px;
    border: 1px solid #314e49;
    background-color: #314e49;
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 51px;
    cursor: pointer;
`;
export const Confirm = styled(FontStyle)`
    width: 100px;
    height: 24px;
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
`;

function HowToVote() {
    return (
        <Template>
            <VoteLogo />
            <Guide>제 5대 소프트웨어 대학 학생회</Guide>
            <VoteDate>선거기간 : 11/19~11/21</VoteDate>
            <GuideBox>
                <Guide>[투표 가이드 라인]</Guide>
                <ElectionLogo />
            </GuideBox>
            <GuideLineBox>
                <GuideLine>
                    1. 후보자 공약을 확인한다<br></br>
                    2-1. 경선일시, 해당 후보를 투표한다,<br></br>
                    기권하고자 하면, 기권 버튼을 누른다.<br></br>
                    2-2. 단선의 경우 찬성과 반대 중 투표한다.<br></br>
                    기권하고자 하면, 기권 버튼을 누른다.<br></br>
                    3. 비밀번호를 입력한다.<br></br>
                    4. 투표완료
                </GuideLine>
            </GuideLineBox>
            <ConfirmBox>
                <Confirm><NavLink to='/Disclaimer' style={{color:'white', textDecoration: 'none'}}>확인</NavLink></Confirm>
            </ConfirmBox>
        </Template>
    );
}

export default HowToVote;