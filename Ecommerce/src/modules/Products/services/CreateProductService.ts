import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/ProductRepository";

export default class CreateProductService {
    public async execute(data: IProductDTO): Promise<Product> {
        const productRepository = new ProductRepository();
        const product = await productRepository.create(data);
        return product;
    }
}