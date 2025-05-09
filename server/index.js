import express from "express";
import mongoose from "mongoose"
import Product from "./models/product.js"
import cors from "cors"

mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(console.log("CONNECTED TO MONGO")).catch(e=>{console.log("error connecting")});

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req,res) => {
    const products = await Product.find({});
    res.send(products);
})

app.get("/products/:id", async (req,res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.send(product);
})

app.post("/products/new" , (req,res) => {
    const newProduct  = new Product(req.body) ;
    newProduct.save();
    res.send(newProduct)
})

app.listen(5000,()=>{
    console.log("Listening on port 5000")
})