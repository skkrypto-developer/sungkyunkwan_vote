$("#back").on("click", () => {
    window.location.href = "/menu"
})

$("#vote1").on("click", () => {
    $.ajax({
        url: "/vote/userKey",
        type: "POST",
        crossDomain: true,
        success: (result) => {
            let userKey = result.userKey

            //ajax call for voting
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })
})

$("#vote2").on("click", () => {
    $.ajax({
        url: "/vote/userKey",
        type: "POST",
        crossDomain: true,
        success: (result) => {
            let userKey = result.userKey

            //ajax call for voting
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })
})

$("#giveUp").on("click", () => {
    // ajax call for giveUp
})