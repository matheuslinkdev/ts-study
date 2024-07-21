var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Admin"] = 1] = "Admin";
    UserStatus[UserStatus["Editor"] = 2] = "Editor";
    UserStatus[UserStatus["User"] = 3] = "User";
})(UserStatus || (UserStatus = {}));
// Assim fica dificil de compreender, o que seria esse 1, esse 2 ????
function checkStatus(status) {
    switch (status) {
        case UserStatus.Admin:
            console.log("É admin");
            break;
        case UserStatus.Editor:
            console.log("É editor");
            break;
        case UserStatus.User:
            console.log("Usuário comum");
            break;
    }
}
checkStatus(2);
var Teclas;
(function (Teclas) {
    Teclas["Cima"] = "ArrowUp";
    Teclas["Baixo"] = "ArrowDown";
    Teclas["Esquerda"] = "ArrowLeft";
    Teclas["Direita"] = "ArrowRight";
})(Teclas || (Teclas = {}));
window.addEventListener("keydown", function (e) {
    if (e.key === Teclas.Cima) {
        alert("Pressionou a tecla arrowup");
    }
});
