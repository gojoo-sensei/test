function print(str) {
console.log(str);
}

function hello() {
return "hello ";
}

function world() {
return "world"; 
}

const printHelloWorld = () => {
print(hello() + world());
}

