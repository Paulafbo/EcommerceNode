import { Request, Response } from "express";

import CreateClientService from
"../../../services/CreateClientService";
import DeleteClientService from "../../../services/DeleteClientService";
import FindIdClientsService from "../../../services/FindIdClientsService";
import ListClientsService from "../../../services/ListClientsService";
import ListOrderClientService from "../../../services/ListOrderClientService";
import UpdateClientService from "../../../services/UpdateClientService";

class ClientsController {

    async findId(request: Request, response: Response) {
        const {id} = request.params;
        const findIdClientsService = new FindIdClientsService();
        const cliente = await findIdClientsService.execute(parseInt(id));
        return response.json(cliente);
    }

    async listOrderClient(request: Request, response: Response) {
        const { id } = request.params;
        const listClientOrder = new ListOrderClientService();
        const clientOrder = await listClientOrder.execute(parseInt(id));

        return response.json(clientOrder);
    }

    async create(request: Request, response: Response) {
        const data = request.body;
        console.log(data);
        const createClientService = new CreateClientService();
        const client = await createClientService.execute(data);
        return response.json(client);
    }

    async list(request: Request, response: Response) {
        const listClientsService = new ListClientsService();

        const clients = await listClientsService.execute();

        return response.json(clients);
       
    }

    async update(request: Request, response: Response) {
        const {id} = request.params;
        const data = request.body;

        const updateClientService = new UpdateClientService();

        const data_to_update = {
            ...data,id:Number(id)
        }

        const clients = await updateClientService.execute(data_to_update);
       
        return response.json(clients);
    }

    async delete(request: Request, response: Response) {
        const {id} = request.params;

        const deleteClientService = new DeleteClientService();


        const reuslt = await deleteClientService.execute(Number(id));
       
        return response.json(reuslt);
    }
}

export default new ClientsController();