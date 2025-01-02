require('dotenv').config(); // Make sure to load environment variables

const port = process.env.PORT || 4000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');

// Configure AWS with your access keys (make sure to keep them secure)
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,  // From .env file
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,  // From .env file
    region: 'us-east-1' // Use the appropriate region for your bucket
});
const s3 = new AWS.S3();

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect(process.env.MONGO_URI);

// Image Storage Engine with Multer for AWS S3
const storage = multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET_NAME, // Name of your S3 bucket
    acl: 'public-read', // Set the ACL to public-read to allow access to the image
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        cb(null, `images/${Date.now()}_${file.originalname}`); // Folder in S3 bucket
    }
});

const upload = multer({ storage: storage });

// Image Upload Endpoint (Uploads directly to S3)
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: req.file.location // S3 URL
    });
});

// Schema for Creating Products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// Add Product Endpoint
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image, // Should be the S3 URL returned by the upload
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    await product.save();
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Other routes (e.g., removeproduct, allproducts, etc.) stay the same...

// Middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ errors: "Please authenticate using valid token" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
};

// Example of other routes
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});
