// ==UserScript==
// @name         nogoogleurlrewrite
// @namespace    https://github.com/LaptopCat/random/
// @version      0.1
// @description  makes google stuff slightly better by stopping google from rewriting urls to their own tracking redirection bullshit
// @author       laptopcat
// @match        https://*.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll("[data-jsarwt]").forEach(url => {url.removeAttribute("data-jsarwt")}); // as simple as that xd
})();
