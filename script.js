//The first feature is card for friend's request. This is js code for 1st feature.
let accept = document.querySelector("#h2f")

function clickacc() {
    accept.innerHTML = "Friend";
    accept.style.color = "green";
}
function clickrej() {
    accept.innerHTML = "Stranger";
    accept.style.color = "red";
}

//The second feature is like feature of instagram. This is code for 2nd feature.
let con = document.querySelector(".imgset")
let love = document.querySelector(".svg")

con.addEventListener("dblclick", function () {
    love.style.transform = "scale(1)";
    setTimeout(function () {
        love.style.transform = "scale(0)";
    },2000)
})

//The third feature is Image hover effect. This is js code for 3rd feature.
let image = document.querySelectorAll("#imago");
let imageset = document.querySelectorAll("#imagoset");

image.forEach(function (det) {

    det.addEventListener("mousemove", function (dets) {
        det.childNodes[3].style.top = dets.y+"px"
        det.childNodes[3].style.left = dets.x+"px"
    })

    det.addEventListener("mouseleave", function () {
        det.childNodes[3].style.opacity = 0;
    })

    det.addEventListener("mouseenter", function () {
        det.childNodes[3].style.opacity = 1;
    })
})
