import { getRepository, Repository } from "typeorm";
import IProductDTO from "../../dtos/IProductDTO";
import IProductRepository from "../../repositories/IProductRepository";
import Product from "./entities/Product";

export default class ProductRepository implements IProductRepository {
    private ormRepository: Repository<Product>;

    constructor() {
        this.ormRepository = getRepository(Product);
    }
    
    async list(): Promise<Product[]> {
        const products = await this.ormRepository.find();
        return products;
    }
    
    async update(data: IProductDTO): Promise<Product> {
        const products = await this.ormRepository.save(data);

       return products;
    }
    
    async delete(id: number): Promise<void> {
        await this.ormRepository.delete(id);
    }

    async create(data: IProductDTO): Promise<Product> {
        const client = this.ormRepository.create(data);
        return this.ormRepository.save(client);
    }

    async findId(id: number): Promise<Product | undefined> {
        const cliente = await this.ormRepository.findOne(id); 
        return cliente;
     }
}
