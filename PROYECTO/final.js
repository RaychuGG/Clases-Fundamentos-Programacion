const age = 30;
const hasCuopon = true;
const couponDiscount = 10;
const hasStudentId = false;

let price = 5000;
let discount = 0

if (age < 12 ){
    discount = 100;
} else{
    if (age >= 65){
        discount = 40;
    }
    if (hasStudentId && 25){
        discount = 25;
    }
    if (hasCuopon && couponDiscount)
        discount = couponDiscount;
}
price = basePrice - (basePrice * discount / 100);

console.log("El precio de su tiquete es:", price);
