window.onload = function currentYear() {
    const today = new Date();
    const year = today.getFullYear();
    const el = document.getElementsByClassName('copyright')[0]
    el.innerText = "Copyright " + year + " Asteur, All rights reserved.";
}
