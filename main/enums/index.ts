enum UserStatus{
    Admin= 1,
    Editor = 2,
    User = 3,
}

// Assim fica dificil de compreender, o que seria esse 1, esse 2 ????
function checkStatus(status: number) {
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

checkStatus(2)

enum Teclas{
    Cima = "ArrowUp",
    Baixo = "ArrowDown",
    Esquerda = "ArrowLeft",
    Direita = "ArrowRight"
}

window.addEventListener("keydown", function(e){
    if(e.key === Teclas.Cima){
        alert("Pressionou a tecla arrowup")
    }
})