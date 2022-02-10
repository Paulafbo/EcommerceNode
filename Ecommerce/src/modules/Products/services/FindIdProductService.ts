import AppError from "../../../shared/errors/AppErrors";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/ProductRepository";

export default class FindIdProductService {
    public async execute(id: number): Promise<Product> {
        const productRepository = new ProductRepository();
        const product = await productRepository.findId(id);
        if(!product) {
            throw new AppError('Id não encontrado!');
       }
        return product;
    }
}