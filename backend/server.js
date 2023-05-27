const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/productModel")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

//routes
app.get("/", (req, res) => {
    res.send("hello this is api dd")
})

app.get("/products", async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.get("/products/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.post("/products", async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.put("/products/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product) {
            return res.status(404).json({message: `connot find any product with id ${id}`});
        } 
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.delete("/products/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product) {
            return res.status(404).json({message: `connot find any product with id ${id}`});
        } 
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


mongoose.connect('mongodb://127.0.0.1:27017/myapp')
.then(() => {
    console.log("mongodb connected")
    app.listen(3000, () => {
        console.log("app is running on 3000 port")
    })
})
.catch((err) => console.log(err));