import React from 'react';
import styled from 'styled-components';
import Template, {FontStyle} from './0_Template';
import {ConfirmBox, Confirm} from './5_How_To_Vote';
import VotingBox from './img/Voting_Box.png';
import {NavLink} from 'react-router-dom';

const CompleteText = styled(FontStyle)`
    width: 237px;
    height: 24px;
    font-size: 20px;
    font-weight: 600;
    color: #61943e;
    margin-top: 89px;
`;

const VoteBox = styled.img.attrs({
    src: VotingBox
})`
    width: 187px;
    height: 172px;
    object-fit: contain;
    margin-top: 16px;
`;

const VoteTextBox = styled(FontStyle)`
    width: 273px;
    height: 158px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
    color: #000000;
    margin-top: 25px;
`;

const VoteText = styled.span`
    color: #61943e;
`;

function VotingComplete (){
    return (
        <Template>
            <CompleteText>투표완료</CompleteText>
            <VoteBox />
            <VoteTextBox>
                소프트웨어 대학 학생회 선거 참여를<br></br>
                완료했습니다<p></p>
                참여보상으로 <VoteText>200 SKKU Token</VoteText>을 <br></br>
                지급했습니다.<br></br>
                오른쪽 위 마이페이지에서 확인해주세요.<p></p>
                참여해주셔서 감사합니다.
            </VoteTextBox>
            <ConfirmBox margin-top='18px'>
                <Confirm><NavLink to='/MyPage' style={{color:'white', textDecoration: 'none'}}>확인</NavLink></Confirm>
            </ConfirmBox>
        </Template>
    );
}

export default VotingComplete;