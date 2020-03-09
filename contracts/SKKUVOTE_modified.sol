pragma solidity ^0.5.0;

contract Election {
    uint nowtotalvote = 0;

    mapping (uint => uint) candidate; // 후보자들 투표 받은거 개수(일단 1번 2번)
    mapping (address => uint) vote_right; // 투표 했는 지 검증 하는 거

    function candidate_received(uint candidatenum) view external returns(uint) {  // 각 투표자 투표받은거
        return candidate[candidatenum];
    }

    function showtotalvote() view public returns (uint){ // 전체 투표수 반환
        return nowtotalvote;
    }

    function vote(uint candidatenum) public { // 투표 안한사람만 참여가능
        require(vote_right[msg.sender] == 0);
        vote_right[msg.sender]=1;
        candidate[candidatenum] += 1;
        nowtotalvote++;
    }
    // function nowtotalvoterate (uint totalstudent) view external onlyOwner returns(uint) {
    //     uint nowtotalvoterating = totalvote;
    //     return (nowtotalvoterating.div(totalstudent) * 100);
    // }

//     솔리디티에서 득표율 계산 X
// 이거는 관리자가 따로 계산해야댐
}

