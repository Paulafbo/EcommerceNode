import ICategoryDTO from "../dtos/ICategoryDTO";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import Category from "../infra/typeorm/entities/Category";
import FindIdCategoryService from "./FindIDCategoryService";

export default class DeleteCategoryService{
    public async execute(id: number):Promise<void>{
        const clientRepository = new CategoryRepository();
        const findCategoryById = new FindIdCategoryService();

        await findCategoryById.execute(id);

        const client = await clientRepository.delete(id);

        
    }
}