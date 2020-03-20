$("#submit").on("click", () => {
    let userID = $('#id').val();
    let userPassword = $('#password').val();

    $.ajax({
        url: "/login/check",
        data: {
            id: userID,
            password: userPassword
        },
        type: "POST",
        crossDomain: true,
        timeout: 3000,
        success: (result) => {
            if (result.msg === "login success") {
                window.location.href = "/menu"
            } else if (result.msg === "login fail") {
                alert('계정정보를 확인해 주세요')
            } else {
                alert('존재하지 않는 계정입니다')
            }
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
            alert('잠시후 다시 시도해주세요!')
        }
    }).fail((jqXHR, textStatus, errorThrown) => {
        console.log(errorThrown)
    })
})