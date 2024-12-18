const helloWorld = function() {
  return 'hello world'
};


console.log(helloWorld);


function function1(){
  return function HelloWorld(){
    return "hello world"; 
  }
  return HelloWorld; 
}
const myfunction = function1();
console.log(myfunction()); 