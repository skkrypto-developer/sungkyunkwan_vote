$("#back").on("click", () => {
    window.location.href = "/menu"
})

$("#button").on("click", () => {
    let userKey = $("#input").val();

    //sending userKey
    $.ajax({
        url: "getUserKey/userData",
        type: "POST",
        data: {
            userKey: userKey
        },
        async: false,
        success: (result) => {

            if (result.msg != "fail") {
                let address = result.address;
                let balance = result.balance;

                // sending address & balance
                $.ajax({
                    url: "getUserKey/session",
                    type: "POST",
                    data: { 
                        userAddress: address,
                        userBalance: balance
                    },
                    crossDomain: true,
                    async: false,
                    success: (result) => {
                        if (result.msg == "success") {
                            window.location.href = "/myPage"
                        } else {
                            alert('다시 시도해 주세요')
                        }
                    },
                    error: (request, status, error) => {
                        console.log('fail to sending data')
                        console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error)
                    }
                });

            } else {
                alert('투표부터 진행해 주세요')
            }
        },
        error: (request, status, error) => {
            console.log('fail to sending data')
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error)
        }
    });
})