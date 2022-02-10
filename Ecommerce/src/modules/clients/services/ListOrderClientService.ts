import AppError from "../../../shared/errors/AppErrors";
import ClientRepository from "../infra/typeorm/ClientRepository";
import Client from "../infra/typeorm/entities/Client";


export default class ListOrderClientService {
    public async execute(id:number): Promise<Client | undefined> {
        const clientOrder = new ClientRepository();


        if(clientOrder === null){
            throw new AppError("Id não encontrado. Cliente não possui pedido!");
        }

        
        const clientsOrder = await clientOrder.listOrderOfClient(id);

        return clientsOrder;
    }
}