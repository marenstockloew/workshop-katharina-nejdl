// BACKGROUND AND TEXT COLOR

var widthOutput = window.innerWidth;

document.body.style.backgroundColor =
    "rgba( 0, " + (1/widthOutput) * 255 * 800 + "," + (widthOutput/1500) * 255 + ", 1)";

document.body.style.color =
    "rgba( " + (1/widthOutput) * 255 * 800 + ",0," + (widthOutput/1500) * 255 + ", 1)";

var resizeColor = function(e) {
    //note i need to pass the event as an argument to the function
    widthOutput = e.target.innerWidth;
    document.body.style.backgroundColor =
        "rgba( 0, " + (1/widthOutput) * 255 * 800 + "," + (widthOutput/1500) * 255 + ", 1)";
    document.body.style.color =
        "rgba( " + (1/widthOutput) * 255 * 800 + ",0," + (widthOutput/1500) * 255 + ", 1)";
 }

// BORDER RADII

// document.getElementsByClassName("grid__element").style.borderRadius = 
document.getElementById("text-container1").style.borderRadius = 
    (1/widthOutput) * 10000 + "px";

var resizeRadius = function(e) {
    widthOutput = e.target.innerWidth;
    document.getElementsByClassName("grid__element").style.borderRadius = 
        (1/widthOutput) * 10000 + "px";
 }

// ALL EVENT LISTENERS

window.addEventListener("resize", resizeColor);
window.addEventListener("resize", resizeRadius);