db.products.insertMany([
  {
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    stock: 25
  },
  {
    name: "Smartphone",
    category: "Electronics",
    price: 800,
    stock: 100
  },
  {
    name: "Desk Lamp",
    category: "Home",
    price: 35,
    stock: 40
  },
  {
    name: "Notebook",
    category: "Stationery",
    price: 5,
    stock: 60
  },
  {
    name: "Ballpoint Pen",
    category: "Stationery",
    price: 1,
    stock: 3
  }
]);
///=> result 
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('69a95f2ee52b2865b82305a8'),
//     '1': ObjectId('69a95f2ee52b2865b82305a9'),
//     '2': ObjectId('69a95f2ee52b2865b82305aa'),
//     '3': ObjectId('69a95f2ee52b2865b82305ab'),
//     '4': ObjectId('69a95f2ee52b2865b82305ac')
//   }
// }

db.products.find({ stock: { $lt: 10 } })

///=>result 
// {
//   _id: ObjectId('69a95f2ee52b2865b82305ac'),
//   name: 'Ballpoint Pen',
//   category: 'Stationery',
//   price: 1,
//   stock: 3
// }

db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } }
)
///=> result 
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 2,
//   modifiedCount: 2,
//   upsertedCount: 0
// }


db.products.find().sort({ price: -1 }).limit(1)

//=>Result
// {
//   _id: ObjectId('69a95f2ee52b2865b82305a8'),
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 1320,
//   stock: 25
// }