"use strict";
const mediaNotas = (nota1, nota2, nota3) => {
    let mediaFinal = (nota1 + nota2) / 2 + nota3 / 5;
    return mediaFinal;
};
console.log(mediaNotas(6, 6, 10));
