let permission = 314432;

function check(element) {
    let number = parseInt(element.id);
    if (element.checked) {
        permission += number;
    } else {
        permission -= number;
    }
}

function goTo() {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=813420881342758913&permissions=" + permission + "&redirect_uri=https%3A%2F%2Fasteur.xyz%2Fsuccess&scope=bot";
}
