//Convention for a interface of class "I"+"name"
interface IPerson {
  id: number;
  name: string;
  age: number;

  sayMyName(): string;
}

class Person implements IPerson {
  id: number;

  //Using the protected keyword you will only be able to acess a property inside the class
  protected name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.name = name;
    this.id = id;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

class Employee extends Person {
  constructor(id: number, name: string, age: number){
    super(id, name, age)
  }
}

const firstPerson = new Person(1, "Matheus", 18);
