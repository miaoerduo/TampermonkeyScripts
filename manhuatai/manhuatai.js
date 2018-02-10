// ==UserScript==
// @name         Manhuatai
// @namespace    https://miaoerduo.com/
// @version      0.1
// @description  remove vip limit
// @author       miaoerduo
// @include      http://www.manhuatai.com/*
// @include      http://m.manhuatai.com/*
// ==/UserScript==

(function() {
    'use strict';
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('#mh_member {display:none;}');

    window.addEventListener(
        'load',
        function() {
            var body = document.getElementsByTagName('body')[0];
            body.style.overflow = 'auto';

            // 滚动模式（实现粗暴，在手机上似乎不好用，可能是浏览器阻止了代码执行）
            setInterval(function() {
                var body = document.getElementsByTagName('body')[0];
                body.style.overflow = 'auto';
            }, 1000);
        },
        true);
})();
