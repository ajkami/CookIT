function openPopup() {
    document.getElementById("myPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}

const hamburgerToggle = document.getElementById('hamburger-toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerToggle.addEventListener('change', function() {
    if (this.checked) {
        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';
    }
});