$("#votePage").on("click", () => {
    window.location.href = "/setUserKey"
})

$("#checkPage").on("click", () => {
    window.location.href = "https://ko-kr.facebook.com/skkusoft/"
})

$("#myPage").on("click", () => {
    window.location.href = "/myPage"
})

$("#logout").on("click", () => {
    $.ajax ({
        url: "/login/out",
        type: "GET",
        crossDomain: true,
        timeout: 3000,
        success: (result) => {
            if (result.msg === "logout success") {
                window.location.href = "/login"
            } else {
                alert('로그아웃 실패')
            }
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    }).fail((jqXHR, textStatus, errorThrown) => {
        console.log(errorThrown)
    })
})