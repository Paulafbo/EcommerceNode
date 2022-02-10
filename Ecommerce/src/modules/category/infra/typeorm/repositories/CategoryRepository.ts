import ICategoryDTO from "../../../dtos/ICategoryDTO";
import ICategoryRepository from "../../../repositories/ICategoryRepository";
import { getRepository, Repository } from "typeorm";
import Category from "../entities/Category";

export default class CategoryRepository implements
ICategoryRepository {
    

private ormRepository: Repository<Category>;

constructor() {
    this.ormRepository = getRepository(Category);
    }

    async create(data: ICategoryDTO): Promise<Category> {
        const category = this.ormRepository.create(data);
        return this.ormRepository.save(category);
    }

    async list(): Promise<Category[]> {
        const categoria = await this.ormRepository.find();
        return categoria;
    }

    async findId(id: number): Promise<Category | undefined> {
        const category = await this.ormRepository.findOne(id); 
        return category;
    }

    async update(data: ICategoryDTO) {
        const Categoria = await this.ormRepository.save(data);

       return Categoria;
    }

    async delete(id: number): Promise<void> {
        await this.ormRepository.delete(id);

    }
}