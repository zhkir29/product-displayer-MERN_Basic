
const mongoose = require('mongoose');
// Define Product Schema and Model
const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number,
    },
  });

  export default productSchema