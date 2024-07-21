type PersonId = number | string;
type PersonName = "Matheus" | "Jose" | "Miguel";

const person = {
  id: 123,
  name: "Joao", // Joao nao é um nome especificado no tipo, por isso o erro
} satisfies { id: PersonId; name: PersonName };
