const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI='mongodb://0.0.0.0:27017/library', {
        // No need for `useNewUrlParser`, `useUnifiedTopology`, or `useFindAndModify`
      });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


// const { MongoClient, ServerApiVersion } = require("mongodb");
// // Replace the placeholder with your Atlas connection string
// const uri = "mongodb://127.0.0.1:27017/library";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri,  {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );
// const connectDB = async () => {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   }
//   catch (err) {
//         console.error('Database connection error:', err.message);
//         process.exit(1);
//       }
// };

// module.exports = connectDB;
