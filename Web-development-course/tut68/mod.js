console.log("This is module");
function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
// module.exports = {
//     avg : average,
//     name:"vegit",
//     repo:"github"
// }

module.exports.name = "vegit"
// module.exports. is a object and we can store other objects or functions inside it