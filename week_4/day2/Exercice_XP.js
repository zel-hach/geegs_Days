db.users.insertOne({
  name: "Yasmine",
  email: "yasmine@tech.ma",
  address: {
    city: "Casablanca",
    country: "Morocco",
    postalCode: "20000"
  }
})

//=>result
// {
//   acknowledged: true,
//   insertedId: ObjectId('69a96354e52b2865b82305ad')
// }

db.orders.insertOne({
  orderNumber: "ORD-99X",
  total: 1500,
  currency: "MAD",
  status: "Processing",
  userId: ObjectId("69a96354e52b2865b82305ad") 
})

//=>Result 
// {
//   acknowledged: true,
//   insertedId: ObjectId('69a96400e52b2865b82305ae')
// }