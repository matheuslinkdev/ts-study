class Person{
    firstName: string;
    lastName: string;
    greet(){
        console.log("Hey there")
    }
}

class Programmer extends Person{
    greet(){
        console.log("Hello world")
    }

    // If you call the greet with "this", it will call the greet from the subclass, that is Programmer
    // greetLikeNormalPeople(){
    //     this.greet()
    // }

    //This will log ("Hey there"), coz the "super" keyword refers to the PARENT class
    greetLikeNormalPeople(){
        super.greet()
    }

    //You can also use super() inside a constructor to call the parent class constructor
}

const aProgrammer = new Programmer()

//If this method doesn't exist on class Programmer will be inherit from class Person, so will log ("Hey there")
// Otherwise, if exists inside the Programmer class, will be logged what is passed to him there, in this case ("Hello world")
aProgrammer.greetLikeNormalPeople()


//POLYMORPHISM
//You can only use methods of the type that it belongs, in this case its Person
const bProgrammer: Person = new Programmer()

//In this case will loog ("hello world"), coz it's calling from thhe instance, that is Programmer class
bProgrammer.greet()