import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import AppError from "../../../shared/errors/AppErrors";

export default class FindIdCategoryService {
    public async execute(id: number): Promise<Category> {
        const categoryRepository = new CategoryRepository();
        const category = await categoryRepository.findId(id);
        if(!category) {
            throw new AppError('Id não encontrado!');
       }
        return category;
    }
}