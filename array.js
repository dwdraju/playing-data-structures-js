//ways to create array

//using the [] operator
var numbers = [];
var nos = [1,2,3,4,5];
console.log(Array.isArray(nos)); // displays true

//calling the Array constructor:
var myArray = new Array();
var myArrs = new Array(1,2,3,4,5);

//specifying length
var lenArr = new Array(8);
console.log(lenArr.length); // displays 8



//Aggregate Array Operations

//assign one array to another array 
var nums = [];
for (var i = 0; i < 10; ++i) {
   nums[i] = i+1;
}

//actually ~ assigning a reference to the assigned array
var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
print(samenums[0]); // displays 400