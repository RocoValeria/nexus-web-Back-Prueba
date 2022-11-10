import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AlquilerModule } from './alquiler/alquiler.module';

@Module({
  imports: [ProductsModule, AlquilerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
