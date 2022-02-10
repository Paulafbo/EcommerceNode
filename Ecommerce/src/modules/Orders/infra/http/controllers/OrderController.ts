import { Request, Response } from "express";
import FindOrderByIdService from "../../../services/FindOrderByIdService";
import CreateOrderService from "../../../services/CreateOrderService";
import ListOrderService from "../../../services/ListOrderService";


class OrderController {
  async list(request: Request, response: Response) {
    const listOrderService = new ListOrderService();

    const order = await listOrderService.execute();

    return response.json(order);
  }
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createOrderService = new CreateOrderService();

    const product = await createOrderService.execute(data);

    return response.json(product);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrderService = new FindOrderByIdService();

    const product = await findOrderService.execute(Number(id));

    return response.json(product);
  }
}

export default new OrderController();