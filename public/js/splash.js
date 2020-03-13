$(document).ready(() => {
    console.log("open splash")
    $("#splash").fadeOut(4000, () => {
        window.location.href = "/login"
    })
})