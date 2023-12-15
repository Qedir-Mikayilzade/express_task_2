const express = require('express');
const app = express();

const products = [
    { id: 1, name: "canta", price: 21, quantity: 12 },
    { id: 2, name: "qelem", price: 24, quantity: 3 },
    { id: 3, name: "xetkes", price: 17, quantity: 34 },
    { id: 4, name: "defter", price: 22, quantity: 32 },
    { id: 5, name: "kitab", price: 1, quantity: 1 },
    { id: 1, name: "karandas", price: 21, quantity: 0 },
    { id: 2, name: "rengli qelem", price: 24, quantity: 0 },
    { id: 3, name: "pozan", price: 17, quantity: 44 },
    { id: 4, name: "boya", price: 22, quantity: 9 },
    { id: 5, name: "defterce", price: 1, quantity: 6 }
]

app.get('/', (req, res) => {
    res.send("Main Page");
})

app.get('/products', (req, res) => {
    res.send(products);
})

app.get('/products/:id', function (req, res) {
    const productID = req.params.id;
    const selectedProduct = products.find(product => product.id == productID);
    if (selectedProduct) {

        res.send(`Məhsulun adı: ${selectedProduct.name} ......... Məhsulun qiyməti: ${selectedProduct.price} azn ......... Məhsulun stokda sayı: ${selectedProduct.quantity}`)

    } else {
        res.status(404).send("istifadeci yoxdur")
    }
});



app.listen(3003, function () {
    console.log('metn');
});