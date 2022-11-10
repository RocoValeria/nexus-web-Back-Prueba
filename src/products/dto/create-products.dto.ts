import { IsString } from 'class-validator';
export class CreateProductsDto {
    @IsString()
    nombre: string;
    @IsString()
    modelo: string;
  }