import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from
"../infra/typeorm/ClientRepository";
import ListClientsService from "./ListClientsService";
import AppError from "../../../shared/errors/AppErrors";

export default class CreateClientService {
    public async execute(data: IClientDTO): Promise<Client> {
        const clientRepository = new ClientRepository();
        const client = await clientRepository.create(data);

        const listClientsService = new ListClientsService();

        const x = await listClientsService.execute();

        const listaCPF= x.map(function (Getcpf) {
           return  Getcpf.cpf;
        });

     for (var i=0; i<listaCPF.length-1; i++) {
         if (listaCPF) {
             if (listaCPF[i] === client.cpf) {
                 throw new AppError("Cpf já cadastrado!");
             }
         }
         
     }
        
        

        return client;
    }
}