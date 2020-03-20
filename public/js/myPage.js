//back to menuPage
$("#back").on("click", () => {
    window.location.href = '/menu'
})

$(document).ready(() => {
    let userKey = ""
    let address = "0"
    let token = 0
    
    // get userKey
    $.ajax({
        url: "/myPage/userKey",
        type: "GET",
        crossDomain: true,
        async: false,
        success: (result) => {
            userKey = result.userKey
            console.log('get userKey')

            // get address
            $.ajax({
                url: 'https://api.luniverse.io/tx/v1.1/wallets',
                type: "POST",
                crossDomain: true,
                async: false,
                dataType: "json",
                headers: {
                    'api-key': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                },
                data: {
                    "walletType" : "LUNIVERSE",
                    "userKey" : userKey
                },
                success: (result) => {
                    address = result.data.address
                    console.log('get userAddress')

                //get balance
                $.ajax({
                    url: 'https://api.luniverse.io/tx/v1.1/wallets/' + address + '/FT9754/SK/balance',
                    type: "GET",
                    crossDomain: true,
                    async: false,
                    dataType: "json",
                    headers: {
                        'api-key': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2" 
                    },
                    success: (result) => {
                        token = result.data.balance
                        console.log('get userBalance')
                    },
                    error: (request, status, error) => {
                        console.log('fail to get balance')
                        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                    }
                    })

                },
                error: (request, status, error) => {
                    console.log('fail to get wallet')
                    console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                }

            })
        },
        error: (request, status, error) => {
            console.log('fail to get userKey')
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })

    //ejs
    $.ajax({
        url: "myPage/userInfo",
        type: "POST",
        async: false,
        data: {
            userToken : token,
            userAddress : address
        },
        success: (result) => {
            console.log('post data')
        },
        error: (request, status, error) => {
            console.log('ejs 안되어아다ㅏ')
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })
})