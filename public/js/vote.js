// back to menuPage
$("#back").on("click", () => {
    window.location.href = "/menu"
})

// voting cadidate 1 and get reward
$("#vote1").on("click", () => {
    
    $("#vote1").prop('disabled', true);

    if (confirm('후보1에 투표하시겠습니까?') == true) {
        $.ajax({
            url: 'vote/candidate1',
            type: "GET",
            success: (result) => {
                if(result.msg == "voting fail") {
                    alert('이미 투표하셨습니다');
                    $("#vote1").prop('disabled', false);
                } else if (result.msg == "voting error") {
                    alert('다시 시도해 주세요');
                    $("#vote1").prop('disabled', false);
                } else if (result.msg == "token error") {
                    alert('토큰 발행에 문제가 있습니다')
                    $("#vote1").prop('disabled', false);
                }
                else {
                    alert('후보1 투표되었습니다');
                    $("#vote1").prop('disabled', false);
                    window.location.href = '/menu'
                }
            },
            error: (request, status, error) => {
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                alert('투표를 다시 진행해 주세요')
                $("#vote1").prop('disabled', false);
            }
        });
    } else {

    }

});

//voting cadidate 2 and get reward
$("#vote2").on("click", () => {

    $("#vote2").prop('disabled', true);

    if (confirm('후보2에 투표하시겠습니까?') == true) {
        $.ajax({
            url: 'vote/candidate2',
            type: "GET",
            success: (result) => {
                if(result.msg == "voting fail") {
                    alert('이미 투표하셨습니다');
                    $("#vote2").prop('disabled', false);
                } else if (result.msg == "voting error") {
                    alert('다시 시도해 주세요');
                    $("#vote2").prop('disabled', false);
                } else if (result.msg == "token error") {
                    alert('토큰 발행에 문제가 있습니다')
                    $("#vote2").prop('disabled', false);
                }
                else {
                    alert('후보2 투표되었습니다');
                    $("#vote2").prop('disabled', false);
                    window.location.href = '/menu'
                }
            },
            error: (request, status, error) => {
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                alert('투표를 다시 진행해 주세요')
                $("#vote2").prop('disabled', false);
            }
        });
    } else {

    }

});

//voting give up and get reward
$("#giveUp").on("click", () => {
   
    $("#giveUp").prop('disabled', true);
    if (confirm('기권하시겠습니까?') == true) {
        $.ajax({
            url: 'vote/giveUp',
            type: "GET",
            success: (result) => {
                if(result.msg == "voting fail") {
                    alert('이미 투표하셨습니다');
                    $("#giveUp").prop('disabled', false);
                } else if (result.msg == "voting error") {
                    alert('다시 시도해 주세요');
                    $("#giveUp").prop('disabled', true);
                } else if (result.msg == "token error") {
                    alert('토큰 발행에 문제가 있습니다');
                    $("#giveUp").prop('disabled', true);
                }
                else {
                    alert('가권 투표되었습니다');
                    $("#giveUp").prop('disabled', true);
                    window.location.href = '/menu'
                }
            },
            error: (request, status, error) => {
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                alert('투표를 다시 진행해 주세요')
                $("#giveUp").prop('disabled', true);
            }
        });
    } else {
        
    }

});