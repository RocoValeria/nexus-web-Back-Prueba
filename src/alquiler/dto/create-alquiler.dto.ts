import { IsString } from "class-validator";



export class CreateAlquilerDto {
@IsString()
readonly id: string;
@IsString()
readonly modelo: string;
@IsString()
readonly monto: Number;
}
