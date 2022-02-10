import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";


export default class ListOrderService {
    public async execute(): Promise<Order[]> {
        const orderRepository = new OrderRepository();

        
        const order = await orderRepository.list();

        return order;

    }
}