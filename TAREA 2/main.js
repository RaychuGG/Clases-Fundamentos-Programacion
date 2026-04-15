let number = 364;
let original = number;
let sum = 0;

for (; number > 0; ){
    let digito = number % 10; 
    sum = sum + digito;

    number = number / 10;
    number = number - (number % 1 );
}

console.log(`La suma de los dígitos del número ${number} es ${sum}`);