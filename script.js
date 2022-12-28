let inputM = 0;
let outputM = 0;
let s, f, sg, tc, d = 0;

let slider = document.getElementById("myRange");
let output = document.getElementById("mmrCount");
let output2 = document.getElementById("finalMmr");

output.innerHTML = slider.value;
output2.innerHTML = 200;

let currentMmr = document.getElementById("currentMmr").value;

slider.oninput = function() {
    let currentMmr = document.getElementById("currentMmr").value;
    var outputM = Number(slider.value);
    output.innerHTML = slider.value;
    output2.innerHTML = parseInt(slider.value) + parseInt(currentMmr);
    console.log(outputM);
}

let checkbox1 = document.querySelector("input[name=faster]");
let checkbox2 = document.querySelector("input[name=steamGuard]");
let checkbox3 = document.querySelector("input[name=timeControl]");
let checkbox4 = document.querySelector("input[name=duo]");

// checkbox1.addEventListener('change', function() {
//     if (this.checked) {
//         output2.innerHTML = (parseInt(slider.value) + parseInt(currentMmr)) * 1.3;
//     } else {
//         output2.innerHTML = parseInt(slider.value) + parseInt(currentMmr);
//     }
    
// });

// let inputM = 4000;
// let outputM = 4100;
// let s = 0;

// for (i = inputM; i < outputM; i += 100) {
//     if (i < 4000) {
//         s += 439.92;
//     } else if (i < 4500) {
//         s += 494.91;
//     } else if (i < 5000) {
//         s += 577.39;
//     } else if (i < 5500) {
//         s += 698.37;
//     } else if (i < 6000) {
//         s += 989.82;
//     } else if (i < 6500) {
//         s += 1320;
//     } else if (i < 7000) {
//         s += 1870;
//     } else {
//         s += 2200;
//   }
// }
// console.log(s);

document.getElementById("calcButton").onclick = function () {
    s = 0;
    inputM = Number(document.getElementById("currentMmr").value);
    outputM = Number(document.getElementById("finalMmr").innerHTML);
    console.log("inputM", inputM);
    console.log("outputM", outputM);
    for (i = inputM; i < outputM; i += 20) {
        if (i < 4000) {
            s += 439.92 / 5;
        } else if (i < 4500) {
            s += 494.91 / 5;
        } else if (i < 5000) {
            s += 577.39 / 5;
        } else if (i < 5500) {
            s += 698.37 / 5;
        } else if (i < 6000) {
            s += 989.82 / 5;
        } else if (i < 6500) {
            s += 1320 / 5;
        } else if (i < 7000) {
            s += 1870 / 5;
        } else {
            s += 2200 / 5;
        }
    }

    if (checkbox1.checked) {
        f = 30;
    } else {
        f = 0;
        
    }

    if (checkbox2.checked) {
        sg = 10;
    } else {
        sg = 0;
        
    }
    
    if (checkbox3.checked) {
        tc = 20;
    } else {
        tc = 0;
        
    }
    
    if (checkbox4.checked) {
        d = 10;
    } else {
        d = 0;
        
    }

    toUser = s + s * ((f + sg + tc + d) / 100);
    console.log(toUser);
    document.getElementById("summOut").innerHTML = Math.round(toUser * 100) / 100 + " рублей"
    console.log((Math.round(toUser * 100) / 100), " рублей");

}