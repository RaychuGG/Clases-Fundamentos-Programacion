// &&  AND
// ||  OR
// !   NOT

const expression1 = 5 > 10 ;
console.log('Expression 1:', expression1);

const expression2 = 3 < 10 ;
console.log('Expression 2:', expression2);

const expression3 = 2 === 2 ;
console.log('Expression 3:', expression3);

const expression4 = 5 !== 5 ;
console.log('Expression 4:', expression4);

// TRUE && TRUE  

console.log ('TRUE && TRUE:', expression2 && expression3);

// FALSE && TRUE

console.log ('FALSE && TRUE:', expression3 && expression1);

// FALSE && FALSE

console.log ('FALSE && FALSE:', expression4 && expression4);

// TRUE || TRUE
console.log ('TRUE || TRUE:', expression2 || expression3);

// FALSE || TRUE
console.log ('FALSE || TRUE:', expression1 || expression3);

// TRUE || FALSE
console.log ('TRUE || FALSE:', expression3 || expression1);

// FALSE || FALSE
console.log ('FALSE || FALSE:', expression1 || expression4);

