const express = require('express');

const router = new express.Router();

router.get('/orders', (req, res) => {
   res.send({message: 'hello world'});
});

module.exports = router;