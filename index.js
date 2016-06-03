"use strict";

var cam1fps = 0,
    cam2fps = 0,
    fp1 = 0,
    fp2 = 0,
    stop1 = 1,
    stop2 = 1;

function cam(num, toggle) {

    var toggle = toggle || false,
        newImg = new Image(),
        curImg = document.getElementById("cam" + num),
        fps = document.getElementById("cam" + num + "fps");

    if (toggle) {
        window['stop' + num] = !window['stop' + num];
    } else {
        fps.innerHTML = window['fp' + num];
    }

    if (window['stop' + num]) {
        fps.innerHTML = 'stoped';
        return;
    }



    newImg.onload = function () {
        if (newImg.src) {
            curImg.src = newImg.src;
        }
        window['fp' + num]++;
        fps.innerHTML = window['fp' + num];
        cam(num);
    };

    newImg.src = "http://west-tarhankut.dlinkddns.com:8" + num + "/images/logo.gif" + "?" + (+new Date());
    return false;
}
