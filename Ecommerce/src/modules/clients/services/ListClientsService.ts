import Client from "../infra/typeorm/entities/Client";
import ClientRepository from
"../infra/typeorm/ClientRepository";

export default class ListClientsService {
    public async execute(): Promise<Client[]> {
        const clientRepository = new ClientRepository();

        const clients = await clientRepository.list();

        return clients;
    }
}