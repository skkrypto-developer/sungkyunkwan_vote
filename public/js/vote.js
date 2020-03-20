let userKey = ""
let address = ""
let token = 0

// back to menuPage
$("#back").on("click", () => {
    window.location.href = "/menu"
})

// get userKey, get wallet, get balance
$(document).ready(() => {
    
    //get userKey
    $.ajax({
        url: "/vote/userAddress",
        type: "GET",
        crossDomain: true,
        success: (result) => {
            address = result.address

                    // get balance
                    $.ajax({
                        url: 'https://api.luniverse.io/tx/v1.1/wallets/' + address + '/FT9754/SK/balance',
                        type: "GET",
                        crossDomain: true,
                        dataType: "json",
                        headers: {
                            "api-key" : "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                        },
                        success: (result) => {
                            token = result.data.balance
                        },
                        error: (request, status, error) => {
                            console.log('fail to get balance')
                            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                        }
                    })
                },
        error: (request, status, error) => {
            console.log('fail to get userKey')
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })
})

// voting cadidate 1 and get reward
$("#vote1").on("click", () => {
    if (token != 0) {
        alert('이미 참여하셨습니다')
    } else {
        
        // voting
        $.ajax({
            url: 'https://api.luniverse.io/tx/v1.1/transactions/voting',
            type: "POST",
            crossDomain: true,
            dataType: "json",
            headers: {
                'api-key': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
            },
            data: {
                "from" : address,
                "inputs" : {
                    "candidatenum" : "0"
                }
            },
            success: (result) => {
                alert('후보 1에 투표를 완료했습니다')
                console.log(result)
                
                // token
                $.ajax({
                    url: 'https://api.luniverse.io/tx/v1.1/transactions/RealReward',
                    type: "POST",
                    crossDomain: true,
                    dataType: "json",
                    headers: {
                        'api-key': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                    },
                    data: {
                        "inputs" : {
                            "receiverAddress" : address,
                            "valueAmount" : "1"
                        }
                    },
                    success: (result) => {
                        alert('토큰이 발급되었습니다')
                        window.location.href = '/menu'
                    },
                    error: (request, status, error) => {
                        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                        alert('토큰 발행에 실패했습니다')
                    }
                })
            },
            error: (request, status, error) => {
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                alert('투표에 실패했습니다')
            }
        })
    }
})

//voting cadidate 2 and get reward
$("#vote2").on("click", () => {
    if (token != 0) {
        alert('이미 참여하셨습니다')
    } else {
        
        //voting
        $.ajax({
            url: 'https://api.luniverse.io/tx/v1.1/transactions/voting',
            type: "POST",
            crossDomain: true,
            dataType: "json",
            headers: {
                'api-key': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
            },
            data: {
                "from" : address,
                "inputs" : {
                    "candidatenum" : "1"
                }
            },
            success: (result) => {
                alert('후보 2에 투표를 완료했습니다')
                
                // token
                $.ajax({
                    url: 'https://api.luniverse.io/tx/v1.1/transactions/RealReward',
                    type: "POST",
                    crossDomain: true,
                    dataType: "json",
                    headers: {
                        'api-key': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                    },
                    data: {
                        "inputs" : {
                            "receiverAddress" : address,
                            "valueAmount" : "1"
                        }
                    },
                    success: (result) => {
                        alert('토큰이 발급되었습니다')
                        window.location.href = '/menu'
                    },
                    error: (request, status, error) => {
                        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                        alert('토큰 발행에 실패했습니다')
                    }
                })
            },
            error: (request, status, error) => {
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                alert('투표에 실패했습니다')
            }
        })
    }
})

//voting give up and get reward
$("#giveUp").on("click", () => {
    if (token != 0) {
        alert('이미 참여하셨습니다')
    } else {
        
        //voting
        $.ajax({
            url: 'https://api.luniverse.io/tx/v1.1/transactions/voting',
            type: "POST",
            crossDomain: true,
            dataType: "json",
            headers: {
                'api-key': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
            },
            data: {
                "from" : address,
                "inputs" : {
                    "candidatenum" : "2"
                }
            },
            success: (result) => {
                alert('기권에 투표를 완료했습니다')
                
                //token
                $.ajax({
                    url: 'https://api.luniverse.io/tx/v1.1/transactions/RealReward',
                    type: "POST",
                    crossDomain: true,
                    dataType: "json",
                    headers: {
                        'api-key': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                    },
                    data: {
                        "inputs" : {
                            "receiverAddress" : address,
                            "valueAmount" : "1"
                        }
                    },
                    success: (result) => {
                        alert('토큰이 발급되었습니다')
                        window.location.href = '/menu'
                    },
                    error: (request, status, error) => {
                        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                        alert('토큰 발행에 실패했습니다')
                    }
                })
            },
            error: (request, status, error) => {
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
                alert('투표에 실패했습니다')
            }
        })
    }
})