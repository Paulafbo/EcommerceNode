import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";

export default interface IClientRepository {
    create(data: IClientDTO): Promise<Client>;
    list(): Promise<Client[]>;
    findId(id: number): Promise<Client | undefined>;
    update(data: IClientDTO): Promise<Client>;
    delete(id: number):Promise<void>;
    
}