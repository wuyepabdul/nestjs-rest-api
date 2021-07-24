import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/items.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){}

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findItemById(@Param('id') id): Promise<Item> {
    return await this.itemsService.findItemById(id);
  }

  @Post()
  async createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.createItem(createItemDto)
  }

  @Delete(':id')
  async deleteItem(@Param('id') id): Promise <Item> {
    return await this.itemsService.deleteItem(id) ;
  }

  @Put(':id')
  updateItem(@Body() updateItem: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.updateItem(id,updateItem)  
  }
}
