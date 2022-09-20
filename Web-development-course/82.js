// Searching for data in mongodb
use harrykart

//This query will return all objects with rating 3.5
db.items.find({rating:3.5})
db.items.find({rating:{$gte:3.5}})// for return of objects having ratings 3.5 or greater than 3.5
db.items.find({rating:{$gt:3.5}})// for return of objects having ratings greater than 3.5

// And operator = ','
db.items.find({rating:{$gt:2.5}},{price:{$gt:15000}})// for return of objects having ratings greater than 3.5

db.items.find({rating:{$lt:4.5}},{price:{$gt:114000}}) // lt =  less than , gt= greater than

// Or operator
db.items.find({$or:[{rating:{$lt:4.5}},{price:{$gt:14000}}]}) 
db.items.find({rating:{$gte:2.5}},{rating:1}) // to show only the ratings 
db.items.find({rating:{$gte:2.5}},{rating:1, qty:1}) // to show only the ratings and the quantity