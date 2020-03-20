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
        async: false,
        success: (result) => {
            if (result.msg === "check success") {

                //create wallet
                $.ajax({
                    url: 'https://api.luniverse.io/tx/v1.1/wallets',
                    type: "POST",
                    crossDomain: true,
                    async: false,
                    dataType: 'json',
                    headers: {
                        'api-key': 'nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2'
                    },
                    data: {
                        'walletType': "LUNIVERSE",
                        'userKey': userKey
                    },
                    success: (result) => {

                        $.ajax({
                            url: "/setUserKey/userAddress",
                            type: "POST",
                            crossDomain: true,
                            async: false,
                            data: {
                                userAddress: result.data.address
                            },
                            success: (result) => {
                                if (result.msg == "success") {
                                    window.location.href = '/vote'
                                } else {
                                    console.log('ajax success but something wrong')
                                }
                            },
                            error: (request, status, error) => {
                                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                            }
                        })
                        
                    },
                    error: (request, status, error) => {
                        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                    }
                })
            } else {
                alert('다시 확인해 주세요')
            }
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })
})