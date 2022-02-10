import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/ProductRepository";

export default class ListProductService {
    public async execute(): Promise<Product[]> {
        const productRepository = new ProductRepository();

        const product = await productRepository.list();

        return product;
    }
}