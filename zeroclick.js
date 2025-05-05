// Copyright (c) 2025 WebTelegraph ZeroClick (https://webtelegraph.pages.dev/brands/zeroclick/)

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    if (content) {
        content.style.display = 'block';
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (
        e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'))
    ) {
        e.preventDefault();
        alert('Action disabled by ZeroClick.');
        window.open('https://webtelegraph.pages.dev/brands/zeroclick/denied', '_blank');
    } else if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
        window.open('https://webtelegraph.pages.dev/brands/zeroclick/denied', '_blank');
    }
});

document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        window.open('https://webtelegraph.pages.dev/brands/zeroclick/denied', '_blank');
        return false;
    } else {
        return true;
    }
};

console.log('%cStop!', 'color: red; font-size: 40px; font-weight: bold;');
console.log('%cThis area is for developers only.', 'color: gray; font-size: 20px;');
