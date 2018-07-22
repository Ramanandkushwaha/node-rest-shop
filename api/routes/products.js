const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require("../models/product");

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product
        .save().then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res.status(201).json({
        message: 'Handling POST request to /products',
        createProduct: product
    });
});

// router.post("/", (req, res, next) => {
//   const product = new Product({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     price: req.body.price
//   });
//   product
//     .save()
//     .then(result => {
//       console.log(result);
//       res.status(201).json({
//         message: "Handling POST requests to /products",
//         createdProduct: result
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Update request'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Delete products'
    });
});

module.exports = router;