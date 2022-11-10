
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    ParseUUIDPipe,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { CreateProductsDto } from './dto/create-products.dto';
  import { ProductsService } from './products.service';
  
  
  @Controller('products')
  
  @UsePipes(ValidationPipe)
  export class ProductsController {
      
      constructor(private readonly productsService: ProductsService){}
     
   @Get()
      getAllProducts(){
        return this.productsService.findAll();
      }
          
  @Get(':id')
  getCarsById(@Param('id',ParseUUIDPipe)id: string){
    console.log({id});
    return this.productsService.findOneById(id);
  }
  @Put(':id')
  updateProducts(@Param('id', ParseIntPipe) id: Number, @Body() body: any) {
    console.log({ id });
    return body;
  }
   @Post()
      //@UsePipes(ValidationPipe)
      createProducts(@Body() createProductsDto: CreateProductsDto) {
        return CreateProductsDto; }
  
  @Delete ('id')
      deleteProducts(@Param('id', ParseIntPipe)id: Number){
        return{
          method:'delete',
          id:id,
      };
      }
  
  
  
  }
    
  
  