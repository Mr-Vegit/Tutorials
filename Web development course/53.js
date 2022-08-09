console.log("This is tutorial 53");

function func_name(random_var, greet) {
    let names = "Name 1"
    console.log(greet + " " + random_var);
    console.log(random_var + " is good boy");
}

function func_sum(a,b,c){
    let d = a+b+c;
    return d;
    // any code will not be execuded after we use return in a function
    // console.log("this function is unreadable")
}
let names = "Harry";
let names2 = "Subham";
let names3 = "Rohan";
let names4 = "Rahul";
let good = "Good Morning"
func_name(names, good);
func_name(names2, good);
func_name(names3, good);
func_name(names4, good);

// let returnVal = func_name(names3)
// console.log(returnVal)

let sum = func_sum(2,5,8)
console.log(sum)

// console.log(names + " is a good boy") ;
// console.log(names2 + " is a good boy");
// console.log(names3 + " is a good boy");
// console.log(names4 + " is a good boy");