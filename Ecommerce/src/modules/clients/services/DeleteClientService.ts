import IClientDTO from "../dtos/IClientDTO";
import ClientRepository from "../infra/typeorm/ClientRepository";
import Client from "../infra/typeorm/entities/Client";
import FindIdClientsService from "./FindIdClientsService";

export default class DeleteClientService{
    public async execute(id: number):Promise<void>{
        const clientRepository = new ClientRepository();
        const findCLientById = new FindIdClientsService();

        

        await findCLientById.execute(id);

        const client = await clientRepository.delete(id);

        
    }
}