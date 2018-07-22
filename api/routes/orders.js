const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /orders'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity : req.body.quantity
    };
    res.status(201).json({
        message: 'order was created!',
        order: order
    });
});

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