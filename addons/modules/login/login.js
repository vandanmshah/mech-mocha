window.addEventListener("load", function() {
    $('.login').click(function ($ev) {
        localStorage.setItem('email', $('.email')[0].value);
    });
});