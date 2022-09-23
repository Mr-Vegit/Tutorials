// // getting-started.js
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/harrykart',{useNewUrlParser:true,useUnifiedTopology:true});

// var db =mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function () {
//    console.log("We are connected brother");
// });
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/harrykart");

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
var db = mongoose.connection;
// db.once("open", function () {
//   console.log("We are connected brother");
// });
const kittySchema = new mongoose.Schema({
  name: String,
});
kittySchema.methods.speak = function () {
  const greeting = "My name is " + this.name;
  console.log(greeting);
};

const Kitten = mongoose.model("Kitty", kittySchema);

const HarryKitty = new Kitten({ name: "Eyepatch" });
const HarryKitty2 = new Kitten({ name: "lord Grim" });
// console.log(HarryKitty.name);
// HarryKitty.speak();

HarryKitty.save(function (err, HarryKitty) {
  if (err) return console.error(err);
  // HarryKitty.speak();
});
HarryKitty2.save(function (err, HarryKitty2) {
  if (err) return console.error(err);
  // HarryKitty2.speak();
});
Kitten.find({ name: "lord Grim" }, function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});
Kitten.deleteOne({ name: "Eyepatch" }, function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});
