class Employee{
    constructor(id, name){
        this.id=id;
        this.name=name;
    }
    display(){
        console.log(this.id+" "+this.name)
    }
}
let e=new Employee(1002,"Varsha");
e.display();