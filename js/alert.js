function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {

    }, function (ex) {

    });
}

const divCard = document.querySelector(".email");
const divAlert = document.querySelector(".alert");

const text = "E-mail copiado para a área de transferência.";
const email = "eliaszavan@gmail.com";

var b = false;
function enableAlert(text) {
    const divMessageVerify = document.querySelector(".message");
    if (divMessageVerify != null) divMessageVerify.remove();
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = text;
    divAlert.appendChild(message);
    copyToClipboard(email);
    setTimeout(() => {
        message.remove();
    }, 2000);
}


divCard.addEventListener("click", () => {
    enableAlert(text);
});