import AppError from "../../../shared/errors/AppErrors";
import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/ProductRepository";
import FindIdProductService from "./FindIdProductService";


export default class UpdateProductService{
    public async execute(data: IProductDTO):Promise<Product>{
        const productRepository = new ProductRepository();
        const findProductById = new FindIdProductService();

        if(!data.id) {
            throw new AppError('Id inválido!');
        }

        await findProductById.execute(data.id);

        const produto = await productRepository.update(data);

        return produto;
    }
}