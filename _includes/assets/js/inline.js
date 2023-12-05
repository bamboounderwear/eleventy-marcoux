// Add your inline JS here

function toggleMenu() {
    var nav = document.querySelector('nav ul');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}