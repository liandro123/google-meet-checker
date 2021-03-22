// ==UserScript==
// @name         Meet Checker
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Check to see if the Google Meet is open; sends alert to let you know if it is open
// @author       Liandro Feliz
// @match        https://meet.google.com/*
// @grant        none
// @updateURL    https://github.com/liandro123/google-meet-checker/raw/main/Meet%20Checker.user.js
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    setTimeout(function(){checkMeet(); }, 3000);
    var ding = new Audio("https://ipfs.io/ipfs/QmbG7DE1qWC9d53iiuHnwuGuCSbeK9EckPwTPhKrBV8wC1?filename=Ding.mp3");
    function checkMeet() {
        // Plays audio when room is ready
        if ($('.JMAjle').length != 0 || $('.GN4RFc').length != 0) {
            ding.play();
            console.log("audio played");
        } else {window.location.reload(); console.log("refreshed");}
    }
})();