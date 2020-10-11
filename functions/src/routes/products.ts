import express = require('express');
import { addProduct, getAllProducts, getProductsByCategory } from '../handlers/productHandler';
const app = express();

const cors = require('cors');
import { corsOptions } from '../utils/cors';
app.use(cors(corsOptions));

app.post('/getAllProducts', getAllProducts);
app.post('/getProductsByCategory', getProductsByCategory);
app.post('/addProduct', addProduct);

export default app;