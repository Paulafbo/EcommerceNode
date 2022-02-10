import IClientDTO from "../../dtos/IClientDTO";
import IClientRepository from
"../../repositories/IClientRepository";
import { getRepository, Repository } from "typeorm";
import Client from "../typeorm/entities/Client";
import Order from "../../../Orders/infra/typeorm/entities/Order";
import { response } from "express";

export default class ClientRepository implements IClientRepository {
    private ormRepository: Repository<Client>;

    constructor() {
        this.ormRepository = getRepository(Client);
    }

    async update(data: IClientDTO): Promise<Client> {
       const client = await this.ormRepository.save(data);

       return client;
    }

    async delete(id: number): Promise<void> {
        await this.ormRepository.delete(id);

    }

    async findId(id: number): Promise<Client | undefined> {
       const cliente = await this.ormRepository.findOne(id); 
       return cliente;
    }

    async list(): Promise<Client[]> {
        const clients = await this.ormRepository.find();
        return clients;
    }

    async create(data: IClientDTO): Promise<Client> {
        const client = this.ormRepository.create(data);
        return this.ormRepository.save(client);
    }

    async listOrderOfClient(id: number): Promise<Client | undefined> {
        return this.ormRepository
          .createQueryBuilder("client")
          .leftJoinAndSelect("client.pedidos", "cp")
          .leftJoinAndSelect("cp.pedido_produtos", "pp")
          .leftJoinAndSelect("pp.produto", "p")
          .leftJoinAndSelect("p.categoria", "c")
          .where("client.id = :id", { id })
          .getOne();
      }
}