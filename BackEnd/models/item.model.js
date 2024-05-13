import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    quantityInStock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
}, { timestamps: true })

export const Item = mongoose.model('Item', itemSchema)