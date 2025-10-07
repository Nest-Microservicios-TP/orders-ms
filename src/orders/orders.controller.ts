import { Controller, NotImplementedException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern({ cmd: 'createOrder' })
  async create(@Payload() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern({ cmd: 'findAllOrders' })
  async findAll() {
    return this.ordersService.findAll();
  }

  @MessagePattern({ cmd: 'findOneOrder' })
  async findOne(@Payload('id') id: string) {
    return this.ordersService.findOne(id);
  }
}
