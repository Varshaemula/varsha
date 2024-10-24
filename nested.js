function sayHello()
{
    function sayHello1(){
        console.log("this is nested function")
    }
    console.log("this is sayHello function");  
    sayHello1();  
}
function sayHi(){
    console.log("this is sayHi function")
}
sayHi();
sayHello();