import mongoose from 'mongoose'

const ItemInOrderSchema = new mongoose.Schema({
    item: {
        type: mongoose.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const ItemInOrder = mongoose.model('ItemInOrder', ItemInOrderSchema);

const OrderSchema = new mongoose.Schema({
    orderNo: {
        type: Number,
        required: true,
    },
    orderDateAndTime: {
        type: Date,
        required: true,
    },
    items: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'ItemInOrder'
        }
    ],
    total: {
        type: Number,
        required: true,
    },
    processedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee',
    },
}, { timeStamps: true })

export const Order = mongoose.model('Order', OrderSchema)