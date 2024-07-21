const mediaNotas = (nota1: number, nota2: number, nota3: number) => {
  let mediaFinal: number = (nota1 + nota2) / 2 + nota3 / 5;
  return mediaFinal;
};

console.log(mediaNotas(6, 6, 10));
