import mongoose from 'mongoose'

const AddressSchema = new mongoose.Schema({
    houseNo: {
        type: Number,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    town: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
}, { timeStamps: true })

export const Address = mongoose.model('Address', AddressSchema)