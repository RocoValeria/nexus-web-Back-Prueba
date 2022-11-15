
import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    ParseUUIDPipe,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { CreateAlquilerDto } from './dto/create-alquiler.dto';
  import { AlquilerService } from './alquiler.service';
@Controller('alquiler')
@UsePipes(ValidationPipe)
export class AlquilerController {
 
 constructor(private readonly alquilerService: AlquilerService){}
         
       @Get()
          getAllAlquiler(){
            return this.alquilerService.findAll();
          }
              
      @Get(':id')
      getAlquilerById(@Param('id',ParseUUIDPipe)id: string){
        console.log({id});
        return this.alquilerService.findOneById(id);
      }
      @Put(':id')
      updateAlquiler(@Param('id', ParseIntPipe) id: Number, @Body() body: any) {
        console.log({ id });
        return body;
      }
       @Post()
          //@UsePipes(ValidationPipe)
          createAlquiler(@Body() createAlquilerDto: CreateAlquilerDto) {
            return CreateAlquilerDto; }

      
      
      
      }
        
