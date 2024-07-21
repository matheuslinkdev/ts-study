type Pessoa = {
  nome: string;
  idade: number;
  paisNatal: string;
  mensagemBoasVindas: () => void;
};

let pessoa: Pessoa = {
    nome: "Matheus",
    idade: 19,
    paisNatal: "Brasil",

    mensagemBoasVindas(){
        console.log(`Olá ${pessoa.nome}`)
    }
};

pessoa.mensagemBoasVindas()
