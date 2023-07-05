// ==UserScript==
// @name         Google Play Utils
// @namespace    https://github.com/LaptopCat/random/
// @version      0.1
// @description  adds a download apk button, shows you the version and app id easily, automatically opens developer info tab
// @author       LaptopCat
// @match        https://play.google.com/store/apps/details?id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=play.google.com
// @grant        none
// ==/UserScript==


window.add_tag = function(title, desc){
    document.getElementsByClassName('w7Iutd')[0].innerHTML += `<div class="wVqUob"><div class="ClM7O">${title}</div><div class="g1rdde">${desc}</div></div>`;
};

window.add_button = function(name, id, action){
    document.getElementsByClassName("edaMIf")[0].innerHTML += `<div class="bGJWSe" style="margin-left:15px;">
    <div class="VAgTTd LMcLV"><div><div class="u4ICaf"><div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb">
    <button id="${id}" class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 MjT6xe sOCCfd brKGGd BhQfub zwjsl" aria-label="${name}" style="--mdc-ripple-fg-size: 120px; --mdc-ripple-fg-scale: 1.789856764822694; --mdc-ripple-fg-translate-start: 100px, -59px; --mdc-ripple-fg-translate-end: 40px, -38px;">
    <div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-J1Ukfc-LhBDec"></div><div class="VfPpkd-RLmnJb"></div><span class="VfPpkd-vQzf8d" aria-hidden="true"><span></span>${name}</span></button></div></div></div></div></div>`;
    document.getElementById(id).onclick = action;
};


(function() {
    "use strict";

    window.app_data = JSON.parse(document.getElementsByTagName("html")[0].textContent.split("AF_initDataCallback({key: 'ds:6',")[1].split("data:")[1].split(", sideChannel")[0])[1][2]
    const appid = window.app_data[77][0]
    window.add_tag(window.app_data[140][0][0][0], "Version");
    window.add_tag(appid, "App Identifier");
    window.add_button("Download (APKPURE)", "apkpure_download", function() {
        location.href = `https://d.apkpure.com/b/APK/${appid}?version=latest`;
    });
    document.querySelector("[aria-controls=developer-contacts]").click(); // less important so its at bottom
})();
