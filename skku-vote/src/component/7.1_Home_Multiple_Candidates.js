import React from 'react';
import styled from 'styled-components';
import Template, {FontStyle} from './0_Template';
import OneCandidate from './img/Blue_Candidate.png';
import TwoCandidate from './img/Orange_Candidate.png';
import HeadTemplate from './0.1_Head';
import {CandidateHead, DecisionGiveup, ElectionLogo} from './7_Home_One_Candidate';

export const HeadBox = styled.div`
    width: 311px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CandidateBox = styled.div`
    width: auto;
    height: 75px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
export const CandidateTextBox = styled.div`
    width: auto;
    height: 75px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-left: 9px;
`;

export const CandidateOne = styled.img.attrs({
    src: OneCandidate
})`
    width: 97px;
    height: 71px;
    object-fit: contain;
    float: left;
`;

export const CandidateTwo = styled.img.attrs({
    src: TwoCandidate
})`
    width: 97px;
    height: 71px;
    object-fit: contain;
    float: left;
`;

export const TextCandidate = styled(FontStyle)`
    width: auto;
    height: 24px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
    color: #000000;
`;

const ElectionBox = styled.div`
    width: 63px;
    height: 56px;
    border-radius: 9px;
    border: 1px solid #707070;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function HomeMultipleCandidate() {
    return (
        <HeadTemplate>
            <HeadBox>
                <CandidateHead>제 5대 소프트웨어 대학 학생회</CandidateHead>
            </HeadBox>
            <CandidateBox style={{marginTop:40}}>
                <CandidateOne />
                <CandidateTextBox>
                    <TextCandidate>기호 1번</TextCandidate>
                    <TextCandidate>정후보: {}/부후보: {}</TextCandidate>
                </CandidateTextBox>
            </CandidateBox>
            <ElectionBox style={{marginTop:20, backgroundColor:'#61943e'}}>
                <ElectionLogo />
            </ElectionBox>
            <CandidateBox style={{marginTop:15}}>
                <CandidateTwo />
                <CandidateTextBox>
                    <TextCandidate>기호 2번</TextCandidate>
                    <TextCandidate>정후보: {}/부후보: {}</TextCandidate>
                </CandidateTextBox>
            </CandidateBox>
            <ElectionBox style={{marginTop:20, backgroundColor:'#ffffff'}}>
                <ElectionLogo />
            </ElectionBox>
            <DecisionGiveup style={{marginTop:58}}>기권</DecisionGiveup>
        </HeadTemplate>
    );
}

export default HomeMultipleCandidate;