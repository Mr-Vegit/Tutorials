// // getting-started.js
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/harrykart',{useNewUrlParser:true,useUnifiedTopology:true});

// var db =mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function () {
//    console.log("We are connected brother");
// });
const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectId;

main().catch((err) => console.log(err));

async function main() {
  mongodb://127.0.0.1:27017
  await mongoose.connect("mongodb://127.0.0.1:27017");

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
var db = mongoose.connection;
// db.once("open", function () {
//   console.log("We are connected brother");
// });
// const kittySchema = new mongoose.Schema({
//   name: String,
// });
const UserSchema = new mongoose.Schema({
  name: String,
  // email: { type: String, required: true, unique: true},
  email: String,
  password: String,
  recent: Array,
  bookmark: Array
});
// UserSchema.plugin(uniqueValidator)
const Users = mongoose.model("Users", UserSchema);
// kittySchema.methods.speak = function () {
//   const greeting = "My name is " + this.name;
//   console.log(greeting);
// };
const filter = { _id: new ObjectId('63fb75f5ecced2f42732902a') };
const updateDoc = {
  // $pull: { $in:{img:"https://gogocdn.net/cover/yugioh-go-rush.png"} },
  $pull: {
    recent: {
      img: 'lorem',
    }
  }
};
const options = { upsert: true };
Users.updateMany(filter, updateDoc, options, function (err, res) {
  if (err) throw err;
  console.log("1 document updated");
});
// const Kitten = mongoose.model("Kitty", kittySchema);

// const HarryKitty = new Kitten({ name: "Eyepatch" });
// const HarryKitty2 = new Kitten({ name: "lord Grim" });
// console.log(HarryKitty.name);
// HarryKitty.speak();

// HarryKitty.save(function (err, HarryKitty) {
//   if (err) return console.error(err);
//   // HarryKitty.speak();
// });
// HarryKitty2.save(function (err, HarryKitty2) {
//   if (err) return console.error(err);
//   // HarryKitty2.speak();
// });
// Kitten.findOne({ name: "lord Grim" }, function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// });
// Kitten.findOne({ name: "Eyepatch" }, function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// });

