import { Request, Response } from "express";
import CreateProductService from "../../../services/CreateProductService";
import DeleteProductService from "../../../services/DeleteProductService";
import FindIdProductService from "../../../services/FindIdProductService";
import ListProductService from "../../../services/ListProductService";
import UpdateProductService from "../../../services/UpdateProductService";


class ProductController {

    async create(request: Request, response: Response) {
        const data = request.body;
        const createProductService = new CreateProductService();
        const product = await createProductService.execute(data);
        return response.json(product);
    }

    async findId(request: Request, response: Response) {
        const {id} = request.params;
        const findIdProductService = new FindIdProductService();
        const produto = await findIdProductService.execute(parseInt(id));
        return response.json(produto);
    }

    async list(request: Request, response: Response) {
        const listClientsService = new ListProductService();

        const clients = await listClientsService.execute();

        return response.json(clients);
       
    }

    async update(request: Request, response: Response) {
        const {id} = request.params;
        const data = request.body;

        const updateClientService = new UpdateProductService();

        const data_to_update = {
            ...data,id:Number(id)
        }

        const clients = await updateClientService.execute(data_to_update);
       
        return response.json(clients);
    }

    async delete(request: Request, response: Response) {
        const {id} = request.params;

        const deleteClientService = new DeleteProductService();


        const reuslt = await deleteClientService.execute(Number(id));
       
        return response.json(reuslt);
    }
}
export default new ProductController();