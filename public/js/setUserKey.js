$("#back").on("click", () => {
    window.location.href = "/menu"
})

$("#button").on("click", () => {
    let userKey = $("#input").val();

    // check userKey
    $.ajax({
        url: "setUserKey/check",
        data: { userKey: userKey },
        type: "POST",
        crossDomain: true,
        async: false,
        success: (result) => {
            
            if (result.msg !== "check fail") {
                console.log(result)
                
                // sending address
                $.ajax({
                    url: "setUserKey/session",
                    type: "POST",
                    crossDomain: true,
                    async: false,
                    data: {
                        userAddress: result.address,
                        userBalance: result.balance
                    },
                    success: (result) => {
                        if (result.msg == "success") {
                            window.location.href = '/vote'
                        } else {
                            console.log('sending data success but something wrong')
                        }
                    },
                    error: (request, status, error) => {
                        console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error)
                    }
                })
            } else {
                alert('다시 확인해 주세요')
            }
        },
        error: (request, status, error) => {
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error)
        }
    })
})