$(document).ready(() => {
    $.ajax({
        url: "/myPage/userKey",
        type: "POST",
        crossDomain: true,
        success: (result) => {
            let userKey = result.userKey

            // ajax for get TxHash
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })
})

$("#back").on("click", () => {
    window.location.href = '/menu'
})