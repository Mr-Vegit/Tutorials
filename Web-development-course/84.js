show dbs
use harrykart
show collections

db.items.find()
db.items.updateOne({name:'Moto 30s'},{$set:{price:1}})
db.items.find({name:'Moto 30s'})
db.items.updateMany({name:'Moto 30s'},{$set:{price:3,rating:1}})
db.items.find({name:'Moto 30s'})
