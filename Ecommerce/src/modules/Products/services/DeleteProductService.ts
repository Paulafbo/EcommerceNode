import ProductRepository from "../infra/typeorm/ProductRepository";
import FindIdProductService from "./FindIdProductService";


export default class DeleteProductService{
    public async execute(id: number):Promise<void>{
        const productRepository = new ProductRepository();
        const findProductById = new FindIdProductService();

        

        await findProductById.execute(id);

        const product = await productRepository.delete(id);

        
    }
}