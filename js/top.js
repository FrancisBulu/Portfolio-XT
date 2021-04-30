const backToTop = document.querySelector("#back-to-top");
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
    if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
    }
    else {
        backToTop.style.display = "none";
    }
}
backToTop.addEventListener("click", ToTop);
function ToTop() {
    window.scrollTo(0, 0); 
}