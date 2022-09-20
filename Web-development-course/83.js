show dbs
use harrykart
show collections

db.items.find({price:22000})

// deleting items from the mongodb database
db.items.deleteOne({price:22000})// It deletes the first object that matches its criteria in case of multiple matchings
db.items.deleteMany({rating:4.0})// It deletes all the objects that matches its criteria 