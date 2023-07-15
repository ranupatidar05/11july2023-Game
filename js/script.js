class MyClass1{  //PascalCase
    //1. property:value
    n1='';

    //2. constructor
    constructor(name){
        this.n1 = name //associativity of the operator   
    }

    //3. method
    getFullName(){ //camleCase
        console.log("hello");
    }
}
//class Instantiation 
//let classobject = new className();

let co = new MyClass1('Ranu');
let co2 = new MyClass1('yogesh');
// co is an external class object
// classobject.member
co.getFullName()










