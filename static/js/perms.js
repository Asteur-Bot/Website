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
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=813420881342758913&permissions=" + permission + "&scope=bot";
}
