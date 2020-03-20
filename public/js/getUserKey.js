$("#back").on("click", () => {
    window.location.href = "/menu"
})

$("#button").on("click", () => {
    let userKey = $("#input").val();

    //create wallet
    $.ajax({
        url: 'https://api.luniverse.io/tx/v1.1/wallets/bridge',
        type: "GET",
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
            let address = result.data.address;

            // get balance
            $.ajax({
                url: 'https://api.luniverse.io/tx/v1.1/wallets/' + address + '/FT9754/SK/balance',
                type: "GET",
                crossDomain: true,
                dataType: "json",
                headers: {
                    "api-key": "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                },
                success: (result) => {
                    let token = result.data.balance

                    //sending data
                    $.ajax({
                        url: "/getUserKey/userData",
                        type: "POST",
                        data: {
                            userAddress: address,
                            userBalance: token
                        },
                        success: (result) => {
                            if (result.msg == "success") {
                                window.location.href = '/myPage'
                            } else {
                                alert('새로고침 후 다시 시도해 주세요')
                            }
                        },
                        error: (request, status, error) => {
                            console.log('fail to sending data')
                            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error)
                        }
                    })
                },
                error: (request, status, error) => {
                    console.log('fail to get balance')
                    console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error)
                }
            })

        },
        error: (request, status, error) => {
            alert('투표부터 실행해 주세요')
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error)
        }
    })
})