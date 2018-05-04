window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("ptext").className = "slideUp";
    }
}
