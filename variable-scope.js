function showScope1() {
   var scope1 = "local";
   return scope1;
}

var scope1 = "global";
console.log(scope1); // displays "global"
console.log(showScope1()); // displays "local"

console.log("-------------");

function showScope2() {
   scope2 = "local";
   return scope2;
}

scope2 = "global";
console.log(scope2); // displays "global"
console.log(showScope2()); // displays "local"
console.log(scope2); // displays "local"

console.log("--------------");

function showScope3() {
   scope3 = "local";
   return scope3;
}

scope3 = "global";
console.log(scope3); // displays "global"
console.log(showScope3()); // displays "local"
console.log(scope3); // displays "local"