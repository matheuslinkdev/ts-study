interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

const john: EmployeePerson = {
  name: "John",
  age: 30,
  employeeId: 1234,
};


interface Drivable {
    drive(): void;
}

interface Flyable {
    fly(): void;
}

type Vehicle = Drivable & Flyable;

const carPlane: Vehicle = {
    drive() { console.log('Driving'); },
    fly() { console.log('Flying'); }
};

carPlane.drive(); // Driving
carPlane.fly();   // Flying
