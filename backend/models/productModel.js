import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = new Schema({
    user: { //to know which admin created which product
        type: Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: String,
        required: true,
    },  
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product