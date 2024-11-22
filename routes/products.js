const express = require('express');
const router = express.Router();

let products = [
  {
    product_id: 'tech_001',
    product_name: 'ASUS ROG 2024',
    price: 22500000,
    category: 'Technology',
  },
  {
    product_id: 'toys_201',
    product_name: 'Transformers Optimus Prime Action Figure',
    price: 240000,
    category: 'Toys',
  },
  {
    product_id: 'wear_802',
    product_name: 'Vans Old Skool',
    price: 600000,
    category: 'Shoes',
  },
  {
    product_id: 'toys_203',
    product_name: 'Lego Star Wars R2-D2',
    price: 1899000,
    category: 'Toys',
  },
  {
    product_id: 'toys_206',
    product_name: 'Play-Doh Modeling Compound 24 Pack',
    price: 699000,
    category: 'Toys',
  },
  {
    product_id: 'tech_009',
    product_name: 'HP ProBook x360 435 G7',
    price: 14000000,
    category: 'Technology',
  },
  {
    product_id: 'wear_805',
    product_name: 'Air Jordan 4 RM',
    price: 2199000,
    category: 'Shoes',
  },
  {
    product_id: 'book_602',
    product_name: 'A Tale of Two Cities',
    price: 200000,
    category: 'Books',
  },
  {
    product_id: 'book_603',
    product_name: 'The Great Gatsby',
    price: 160000,
    category: 'Books',
  },
  {
    product_id: 'tech_003',
    product_name: 'PS5 Slim Digital Version',
    price: 6500000,
    category: 'Tech',
  },
];

router.get('/products', (req, res) => {
  res.render('products', { products });
});

router.get('/products/:id', (req, res) => {
  const id = req.params.id;

  let targetProduct = products.filter((item) => {
    return item.product_id === id;
  });

  res.render('product', { targetProduct });
});

module.exports = router;
