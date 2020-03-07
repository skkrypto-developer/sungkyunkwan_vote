import React from 'react';
import HeadTemplate from './0.1_Head';
import {ConfirmBox, Confirm} from './5_How_To_Vote';
import {CandidateHead} from './7_Home_One_Candidate';
import {CandidateOne, CandidateTwo, CandidateBox, CandidateTextBox, TextCandidate, HeadBox} from './7.1_Home_Multiple_Candidates';

function HomePromimse() {
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
            <ConfirmBox margin-top='25px'>
                    <Confirm>공약확인</Confirm>
            </ConfirmBox>
            <CandidateBox style={{marginTop:15}}>
                <CandidateTwo />
                <CandidateTextBox>
                    <TextCandidate>기호 2번</TextCandidate>
                    <TextCandidate>정후보: {}/부후보: {}</TextCandidate>
                </CandidateTextBox>
            </CandidateBox>
            <ConfirmBox margin-top='25px'>
                    <Confirm>공약확인</Confirm>
            </ConfirmBox>
        </HeadTemplate>
    );
}

export default HomePromimse;