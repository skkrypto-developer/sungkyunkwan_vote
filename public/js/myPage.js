//back to menuPage
$("#back").on("click", () => {
    window.location.href = '/menu'
})

$("#logout").on("click", () => {
    if (confirm('로그아웃 하시겠습니까?') == true) {
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
    } else {
        
    }
})