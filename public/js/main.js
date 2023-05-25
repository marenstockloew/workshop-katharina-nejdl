// BACKGROUND AND TEXT COLOR

// 2 functions for color range
function relation1(w) {
    return ( (1/w) * 500 * 255);
}
function relation2(w) {
    return ( (w/3000 ) * 255);
}

// Definitions of colors depending on the window width
var widthOutput = window.innerWidth;

var colorValueVariable1 = "rgba( " + String( relation1(widthOutput) ) + ",0," + String( relation2(widthOutput) ) + ", 1)";
var colorValueVariable2 = "rgba( 0, " + String( relation1(widthOutput) ) + "," + String( relation2(widthOutput) ) + ", 1)";
var ShadowVariable__controlroom = "0px 0px 10px 5px " + colorValueVariable2 + ", inset 0px 0px 10px 5px " + colorValueVariable2;
var colorValueVariable2Alpha = "rgba( 0, " + String( relation1(widthOutput) ) + "," + String( relation2(widthOutput) ) + ", .8)";


document.getElementById("textinput").style.boxShadow = ShadowVariable__controlroom;
document.getElementById("questionField").style.boxShadow = ShadowVariable__controlroom;
document.getElementById("submitbutton").style.boxShadow = ShadowVariable__controlroom;
document.getElementById("volume1").style.boxShadow = ShadowVariable__controlroom;
document.getElementById("volume1").style.backgroundColor = colorValueVariable2Alpha;
document.getElementById("volume2").style.boxShadow = ShadowVariable__controlroom;
document.getElementById("volume2").style.backgroundColor = colorValueVariable2Alpha;
document.getElementById("volume3").style.boxShadow = ShadowVariable__controlroom;
document.getElementById("volume3").style.backgroundColor = colorValueVariable2Alpha;
document.getElementById("volume4").style.boxShadow = ShadowVariable__controlroom;
document.getElementById("volume4").style.backgroundColor = colorValueVariable2Alpha;

document.body.style.color = colorValueVariable1;

document.getElementById("textinput").style.color = colorValueVariable1;

document.getElementById("submitbutton").style.color = colorValueVariable1;

var resizeColor = function(e) {
    var widthOutput = window.innerWidth;

    var colorValueVariable1 = "rgba( " + String( relation1(widthOutput) ) + ",0," + String( relation2(widthOutput) ) + ", 1)";
    var colorValueVariable2 = "rgba( 0, " + String( relation1(widthOutput) ) + "," + String( relation2(widthOutput) ) + ", 1)";
    var ShadowVariable__controlroom = "0px 0px 10px 5px " + colorValueVariable2 + ", inset 0px 0px 10px 5px " + colorValueVariable2;
    var colorValueVariable2Alpha = "rgba( 0, " + String( relation1(widthOutput) ) + "," + String( relation2(widthOutput) ) + ", .8)";

    document.getElementById("textinput").style.boxShadow = ShadowVariable__controlroom;
    document.getElementById("questionField").style.boxShadow = ShadowVariable__controlroom;
    document.getElementById("submitbutton").style.boxShadow = ShadowVariable__controlroom;
    document.getElementById("volume1").style.boxShadow = ShadowVariable__controlroom;
    document.getElementById("volume1").style.backgroundColor = colorValueVariable2Alpha;
    document.getElementById("volume2").style.boxShadow = ShadowVariable__controlroom;
    document.getElementById("volume2").style.backgroundColor = colorValueVariable2Alpha;
    document.getElementById("volume3").style.boxShadow = ShadowVariable__controlroom;
    document.getElementById("volume3").style.backgroundColor = colorValueVariable2Alpha;
    document.getElementById("volume4").style.boxShadow = ShadowVariable__controlroom;
    document.getElementById("volume4").style.backgroundColor = colorValueVariable2Alpha;
    
    document.body.style.color = colorValueVariable1;
    document.getElementById("textinput").style.color = colorValueVariable1;
    document.getElementById("submitbutton").style.color = colorValueVariable1;
 }

// BORDER RADII

// document.getElementsByClassName("grid__element").style.borderRadius = 
// document.getElementById("text-container1").style.borderRadius = 
//     (1/widthOutput) * 10000 + "px";

// var resizeRadius = function(e) {
//     widthOutput = e.target.innerWidth;
//     document.getElementsByClassName("grid__element").style.borderRadius = 
//         (1/widthOutput) * 10000 + "px";
//  }

// ALL EVENT LISTENERS

window.addEventListener("resize", resizeColor);
// window.addEventListener("resize", resizeRadius);