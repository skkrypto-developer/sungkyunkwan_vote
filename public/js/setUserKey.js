$("#back").on("click", () => {
    window.location.href = "/menu"
})

$("#button").on("click", () => {
    let userKey = $("#input").val();

    // check userKey
    $.ajax ({
        url: "/setUserKey/check",
        data: {userKey: userKey},
        type: "POST",
        crossDomain: true,
        timeout: 3000,
        success: (result) => {
            if (result.msg === "check success") {

                //create wallet
                $.ajax({
                    url: 'https://api.luniverse.io/tx/v1.1/wallets',
                    type: "POST",
                    crossDomain: true,
                    dataType: 'json',
                    headers: {
                        'api-key': 'nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2'
                    },
                    data: {
                        'walletType': "LUNIVERSE",
                        'userKey': userKey
                    },
                    timeout: 3000,
                    success: (result) => {
                        window.location.href = '/vote'
                    },
                    error: (request, status, error) => {
                        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                    }
                }).fail((jqXHR, textStatus, errorThrown) => {
                    console.log(errorThrown)
                })

            } else {
                alert('다시 확인해 주세요')
            }
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    }).fail((jqXHR, textStatus, errorThrown) => {
        console.log(errorThrown)
    })
})