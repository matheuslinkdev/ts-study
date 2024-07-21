var pessoa = {
    nome: "Matheus",
    idade: 19,
    paisNatal: "Brasil",
    mensagemBoasVindas: function () {
        console.log("Ol\u00E1 ".concat(pessoa.nome));
    }
};
pessoa.mensagemBoasVindas();
