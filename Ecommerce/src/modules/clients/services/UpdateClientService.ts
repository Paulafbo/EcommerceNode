import AppError from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDTO";
import ClientRepository from "../infra/typeorm/ClientRepository";
import Client from "../infra/typeorm/entities/Client";
import FindIdClientsService from "./FindIdClientsService";

export default class UpdateClientService{
    public async execute(data: IClientDTO):Promise<Client>{
        const clientRepository = new ClientRepository();
        const findCLientById = new FindIdClientsService();

        if(!data.id) {
            throw new AppError('Id inválido!');
        }

        await findCLientById.execute(data.id);

        const client = await clientRepository.update(data);

        return client;
    }
}