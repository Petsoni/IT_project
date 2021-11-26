function $(htmlBody) {
    
}

$("button").click(function () {
    $('html,body').animate({
            scrollTop: $(".news").offset().top
        },
        'slow');
});

var navLinks = document.getElementById("navLinks");

function openMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}