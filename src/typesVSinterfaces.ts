// Type é útil para tipos complexos e uniões
type ID = string | number; // Definindo um tipo que pode ser string ou número

// Definindo um tipo para um objeto
type User = {
  id: ID;
  name: string;
};

// Usando o tipo User
const user: User = {
  id: 123,
  name: "Alice",
};


// Interfaces 

// Interface é ideal para definir tipos de objetos e suas estruturas
interface User {
  id: number;
  name: string;
}

// Extensão de uma interface para adicionar novas propriedades
interface Admin extends User {
  adminLevel: number;
}

// Usando a interface Admin
const admin: Admin = {
  id: 1,
  name: 'Bob',
  adminLevel: 2,
};
