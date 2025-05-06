import mongoose from "mongoose"
import Product from "./models/product.js"

mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(console.log("CONNECTED TO MONGO")).catch(e=>{console.log("error connecting")});


const seedProducts = [
    {
        name:'onion',
        price:20,
        category:'vegetable'
    },
    {
        name:'panner',
        price:50,
        category:'dairy'
    },
    {
        name:'banana',
        price:6,
        category:'fruit'
    }
]

Product.insertMany(seedProducts);