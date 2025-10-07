import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
}, {
    timestamps: true,
});
