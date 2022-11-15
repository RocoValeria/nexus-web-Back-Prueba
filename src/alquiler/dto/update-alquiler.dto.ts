import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateAlquilerDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsString()
  @IsOptional()
  readonly modelo?: string;
  @IsString()
  @IsOptional()
  readonly monto?: Number;
}
