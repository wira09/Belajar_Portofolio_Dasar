const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    if (window.scrollY > 70) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
