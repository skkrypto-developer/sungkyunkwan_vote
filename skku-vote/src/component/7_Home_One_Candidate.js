import React from 'react';
import styled from 'styled-components';
import {FontStyle} from './0_Template';
import OneCandidate from './img/One_Candidate.png';
import Electionlogo from './img/Election_logo.png';
import HeadTemplate from './0.1_Head';

const HeadBox = styled.div`
    width: 311px;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CandidateHead = styled(FontStyle)`
    width: 311px;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #61943e;
    margin-top: 40px;
`;
const PictureBox = styled.div`
    width: 247px;
    height: 28%;
`;
const Candidatepic = styled.img.attrs({
    src: OneCandidate
})`
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 12px;
    margin-bottom:11px;
`;

const CandidateText = styled(FontStyle)`
    width: 237px;
    height: 24px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
    color: #000000;
    margin-top: 1px;
`;

const Candidatelogo = styled(FontStyle)`
    width: 105px;
    height: 64px;
    border: 1px solid #707070;
    background: white;
    margin-top: 11px;
`;

const DecisionBox = styled.div`
    margin-top: 25px;
    width: 0 auto;
    height: 11.7%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const DecisionAgree = styled(FontStyle)`
    width: 78px;
    height: 75px;
    border-radius: 22px;
    border: 1px solid #707070;
    background-color: #61943e;
    margin-left: 13.5px;
    margin-right: 13.5px;
    line-height: 1.19;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const DecisionObject = styled(FontStyle)`
    width: 78px;
    height: 75px;
    border-radius: 22px;
    border: 1px solid #707070;
    background-color: white;
    margin-left: 13.5px;
    margin-right: 13.5px;
    line-height: 1.19;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ElectionLogo = styled.img.attrs({
    src: Electionlogo
})`
    width: 20px;
    height: 20px;
    object-fit: contain;
`
export const DecisionGiveup = styled(FontStyle)`
    width: 88px;
    height: 33px;
    border: 1px solid #314e49;
    background-color: #d9d9d9;
    font-size: 20px;
    font-weight: normal;
    color: black;
    border-radius: 15px;
    align-self: center;
`;

function HomeOneCandidate () {
    return (
        <HeadTemplate>
            <HeadBox>
                <CandidateHead >제 5대 소프트웨어 대학 학생회</CandidateHead>
            </HeadBox>
            <PictureBox>
                <Candidatepic />
            </PictureBox>
            <CandidateText>기호 1번</CandidateText>
            <CandidateText>정후보 : {}/ 부후보: {}</CandidateText>
            <Candidatelogo />
            <DecisionBox>
                <DecisionAgree>
                    찬 <br></br>
                    <ElectionLogo />
                </DecisionAgree>
                <DecisionObject>
                    반 <br></br>
                    <ElectionLogo />
                </DecisionObject>
            </DecisionBox>
            <DecisionGiveup style={{marginTop:11, marginBottom:24}}>기권</DecisionGiveup>
        </HeadTemplate>
    );
}

export default HomeOneCandidate;