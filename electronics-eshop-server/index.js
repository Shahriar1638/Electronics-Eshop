const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uwwtyq1.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const productsCollection = client.db("eshopDB").collection("products");
    const usersCollection = client.db("eshopDB").collection("users");
    const brandsCollection = client.db("eshopDB").collection("brands");

    // ------> products apis started <------//

    //Getting Product Data from server
    app.get('/products', async(req,res) => {
      const getProducts = productsCollection.find();
      const result = await getProducts.toArray();
      res.send(result);
    });

    //get Product by id
    app.get('/products/:id', async(req,res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await productsCollection.findOne(query);
      res.send(result);
    });

    //update product
    app.put('/products/:id', async(req,res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = { upsert : true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          rating: updatedProduct.rating,
          brandName: updatedProduct.brandName,
          productName: updatedProduct.productName,
          price: updatedProduct.price,
          photoURL: updatedProduct.photoURL,
          productType: updatedProduct.productType ,
          shortDescription: updatedProduct.shortDescription
        }
      }
      const result = await productsCollection.updateOne(filter,product,options);
      res.send(result);
    })

    // Receiving products data from client and posting to data base:
    app.post('/products', async(req,res) => {
        const newProduct = req.body
        console.log("new product: ",newProduct)
        const result = await productsCollection.insertOne(newProduct);
        res.send(result);
    });


    // ------> Users apis started <------//


    //Receiving data about user from database
    app.get('/users', async(req,res) => {
      const getUsers = usersCollection.find();
      const result = await getUsers.toArray();
      res.send(result);
    });

    //Update user cart
    app.put('/users/:email', async(req,res) => {
      const email = req.params.email;
      const filter = {email: email}
      const options = { upsert : true};
      const updatedCart = req.body;
      const cartCollection = {
        $push: {
          cart: updatedCart.product,
        }
      }
      const result = await usersCollection.updateOne(filter,cartCollection,options);
      res.send(result);
    })

    //Get user by email
    app.get('/users/:email', async(req,res) => {
      const email = req.params.email;
      const query = {email: email}
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    //Receiving data for cart from user and posting to data base:
    app.post('/users', async(req,res) => {
      const usersproduct = req.body
      const result = await usersCollection.insertOne(usersproduct);
      res.send(result);
    });

    

    // ------> Brands apis started <------//



    //Receive brand data:
    app.get('/brands', async(req,res) => {
      const getbrands = brandsCollection.find();
      const result = await getbrands.toArray();
      res.send(result);
    });


    // ------> Brand apis ended <------//



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);



app.get('/',(req, res)=>{
    res.send('Mango management server is running')
})

app.listen(port, ()=>{
    console.log(`Server Running in Port: ${port}`)
})
