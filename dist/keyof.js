// O operador keyof no TypeScript é usado para criar um tipo que consiste nas chaves de um objeto. Ele é especialmente útil quando você deseja criar tipos que dependem das chaves de outro tipo. O keyof retorna um tipo que é a união de todas as chaves de um tipo de objeto.
var key;
key = "name"; // válido
key = "age"; // válido
key = "address"; // válido
// key = 'phone'; // inválido, "phone" não está no tipo PersonKeys
console.log(key);
