$(document).ready(() => {
    console.log("open splash")
    $("#splash").fadeOut(2000, () => {
        window.location.href = "/login"
    })
})