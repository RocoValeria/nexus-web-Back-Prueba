
import { Injectable, NotFoundException } from '@nestjs/common';
import { Console } from 'console';
import { v4 as uuid } from 'uuid';
@Injectable()
export class AlquilerService {
    private alquiler: any[] =[
        {
            id: uuid(),
            nombre: '',
            monto: '',
            Modelo:	'',
          
        }
        
    ]
          findAll(){
            return this.alquiler;
        }
        findOneById(id: string){
            console.log({id});
            const alquiler = this.alquiler.find((alquiler) => alquiler.id === id);
            if (!alquiler) {
              throw new NotFoundException(`Product with id '${id}' not found`);
            }
            return alquiler;
        }
    }
