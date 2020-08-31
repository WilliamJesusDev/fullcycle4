import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async index(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async store(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }

  async update(category: Category): Promise<Category> {
    await this.categoryRepository.update(category.id, category);
    return await this.categoryRepository.findOne(category.id);
  }

  async delete(id): Promise<void> {
    await this.categoryRepository.delete(id);
    await this.categoryRepository.query(
      'delete from sqlite_sequence where name="category"',
    );
  }
}
