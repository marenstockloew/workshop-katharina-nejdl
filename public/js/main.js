// BACKGROUND AND TEXT COLOR

var widthOutput = window.innerWidth;

colorValueVariable = "rgba( 0, " + String( (1/widthOutput) * 255 * 800 ) + "," + String( (widthOutput/1500) * 255 ) + ", 1)";
colorShadowVariable = "0px 0px 10px 5px " + colorValueVariable + ", inset 0px 0px 10px 5px " + colorValueVariable;
colorValueVariableAlpha = "rgba( 0, " + String( (1/widthOutput) * 255 * 800 ) + "," + String( (widthOutput/1500) * 255 ) + ", .5)";

// document.body.style.backgroundColor = colorValueVariable;

document.getElementById("textinput").style.boxShadow = colorShadowVariable;
document.getElementById("questionField").style.boxShadow = colorShadowVariable;
document.getElementById("submitbutton").style.boxShadow = colorShadowVariable;
document.getElementById("volume1").style.boxShadow = colorShadowVariable;
document.getElementById("volume1").style.backgroundColor = colorValueVariableAlpha;
document.getElementById("volume2").style.boxShadow = colorShadowVariable;
document.getElementById("volume2").style.backgroundColor = colorValueVariableAlpha;
document.getElementById("volume3").style.boxShadow = colorShadowVariable;
document.getElementById("volume3").style.backgroundColor = colorValueVariableAlpha;
document.getElementById("volume4").style.boxShadow = colorShadowVariable;
document.getElementById("volume4").style.backgroundColor = colorValueVariableAlpha;

document.body.style.color =
    "rgba( " + (1/widthOutput) * 255 * 800 + ",0," + (widthOutput/1500) * 255 + ", 1)";

document.getElementById("textinput").style.color = 
    "rgba( " + (1/widthOutput) * 255 * 800 + ",0," + (widthOutput/1500) * 255 + ", 1)";

document.getElementById("submitbutton").style.color = 
    "rgba( " + (1/widthOutput) * 255 * 800 + ",0," + (widthOutput/1500) * 255 + ", 1)";

var resizeColor = function(e) {
    //note i need to pass the event as an argument to the function
    widthOutput = e.target.innerWidth;
    
    colorValueVariable = "rgba( 0, " + String( (1/widthOutput) * 255 * 800 ) + "," + String( (widthOutput/1500) * 255 ) + ", 1)";

    // document.body.style.backgroundColor = colorValueVariable;

    document.getElementById("textinput").style.boxShadow = colorShadowVariable;
    document.getElementById("questionField").style.boxShadow = colorShadowVariable;
    document.getElementById("submitbutton").style.boxShadow = colorShadowVariable;
    document.getElementById("volume1").style.boxShadow = colorShadowVariable;
    document.getElementById("volume1").style.backgroundColor = colorValueVariableAlpha;
    document.getElementById("volume2").style.boxShadow = colorShadowVariable;
    document.getElementById("volume2").style.backgroundColor = colorValueVariableAlpha;
    document.getElementById("volume3").style.boxShadow = colorShadowVariable;
    document.getElementById("volume3").style.backgroundColor = colorValueVariableAlpha;
    document.getElementById("volume4").style.boxShadow = colorShadowVariable;
    document.getElementById("volume4").style.backgroundColor = colorValueVariableAlpha;
    
    document.body.style.color =
        "rgba( " + (1/widthOutput) * 255 * 800 + ",0," + (widthOutput/1500) * 255 + ", 1)";
    document.getElementById("textinput").style.color = 
        "rgba( " + (1/widthOutput) * 255 * 800 + ",0," + (widthOutput/1500) * 255 + ", 1)";
    document.getElementById("submitbutton").style.color = 
        "rgba( " + (1/widthOutput) * 255 * 800 + ",0," + (widthOutput/1500) * 255 + ", 1)";
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