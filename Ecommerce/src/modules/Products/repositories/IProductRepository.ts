import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";

export default interface IProductRepository {

    create(data: IProductDTO): Promise<Product>;

    list(): Promise<Product[]>;

    findId(id: number): Promise<Product | undefined>;

    update(data: IProductDTO): Promise<Product>;

    delete(id: number):Promise<void>;
}