import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async index(): Promise<Category[]> {
    return await this.categoriesService.index();
  }

  @Post()
  async store(@Body() category: Category): Promise<Category> {
    return await this.categoriesService.store(category);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() category: Category,
  ): Promise<Category> {
    category.id = +id;
    return await this.categoriesService.update(category);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.categoriesService.delete(+id);
  }
}
