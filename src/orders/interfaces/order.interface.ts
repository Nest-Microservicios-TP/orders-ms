import { Document } from 'mongoose';

export interface Order extends Document {
  readonly userId: number;
  readonly productId: number;
  readonly quantity: number;
  readonly totalPrice: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
