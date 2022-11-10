
import { Injectable, NotFoundException } from '@nestjs/common';
import { Console } from 'console';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ProductsService {
    private products: any[] =[
      {
      id: uuid(),
      nombre: 'Renault Clio 2015 VRAY',
      precio: '12500',
      descripcion: 'Marca	Renault',
      Modelo:	'Clio VRAY 2015',
         Color:	'amarillo',
      Combustible:	'Nafta',
      Puertas:	5,
      Transmision:	'Manual',
      Motor:'1.6',
      
      photo:"../assets/clio.jpg",
      photob:"../assets/baulClio.jpg",
      photoi:"../assets/interioirClio.jpg"
    },
    {
      id: uuid(),
      nombre: '2021 Fiat 500',
      precio: '9000',
      descripcion: 'Marca Fiat',
      Modelo:	'500 2021',
        Color:	' gris plata',
      Combustible:	'gasoil',
      Puertas:	5,
      Transmision:	'Automatica',
      Motor:'1.4',
      photo:"../assets/FIAT500.jpg",
      photob:"../assets/baulFiat.jpg",
      photoi:"../assets/FIAT500INTERIOR.jpg"
    },
    {
      id: uuid(),
      nombre: 'Ford Focus 2019 ST-line',
      precio: '22500',
      descripcion: 'Marca	Ford',
      Modelo:	'Focus 2019',
      Color:	'Azul',
      Combustible:	'Nafta',
      Puertas:	5,
      Transmision:	'Manual',
      Motor:'1.5',
      photo:"../assets/focus.jpg",
      photob:"../assets/BaulFocus.jpg",
      photoi:"../assets/focusinterior.jpg"
    },
    {
      id: uuid(),
      nombre: 'Chevrolet Silverado ZR2',
      precio: '12500',
      descripcion: 'Marca	Chevrolet',
      Modelo:	'Silverado ZR2 2017 ',
      Color:	'Azul',
      Combustible:	'Nafta',
      Puertas:	5,
      Transmision:	'Manual',
      Motor:'2.1',
      photo:"../assets/silverado.jpg",
      photob:"../assets/BaulSilverado.jpg",
      photoi:"../assets/silveradoINTERIOR.jpg"
    },
    {
      id: uuid(),
      nombre: 'RAM Power Wagon',
      precio: '45000',
      descripcion: 'Marca	Dodge',
      Modelo:	'Ram Power Wagon 2015',  
      Color:	'Rojo',
      Combustible:	'Nafta',
      Puertas:	5,
      Transmision:	'Automatica',
      Motor:'1.2',    photo:"../assets/Ram.jpg",
      photob:"../assets/baulram.jpg",
      photoi:"../assets/INTERIORRAM.jpg"
    },
    {
      id: uuid(),
      nombre: 'Audi TT cupé 2018 ',
      precio: '12500',
      descripcion: 'Marca	Audi',
      Modelo:	'TT Cupe 2018',
      Color:	'Rojo',
      Combustible:	'Nafta',
      Puertas:	3,
      Transmision:	'Manual',
      Motor:'1.8',
      photo:"../assets/audiTT.jpg",
      photob:"../assets/BaulAudi.jpg",
      photoi:"../assets/INTERIORAUDI.jpg"
    },
    {
      id: uuid(),
      nombre: 'BMW X6',
      precio: '15500',
      descripcion: 'Marca	BMW',
      Modelo:	'X6 2015',
      Color:	'Negro',
      Combustible:	'Nafta',
      Puertas:	5,
      Transmision:	'Manual',
      Motor:'1.2',
      photo:"../assets/bmw.jpg",
      photob:"../assets/BaulBMW.jpg",
      photoi:"../assets/interiorbmw.jpg"
    },
    {
      id: uuid(),
      nombre: 'Mercedes-Benz G63',
      precio: '12000',
      descripcion: 'Marca	Renault',
      Modelo:	'Clio VRAY 2015',
      Color:	'Negro',
      Combustible:	'Nafta',
      Puertas:	5,
      Transmision:	'Manual',
      Motor:'1.2',
      photo:"../assets/Mercedes.jpg",
      photob:"../assets/BaulMercedes.jpg",
      photoi:"../assets/InteriorMercedes.jpg"
    },
    {
      id: uuid(),
      nombre: 'Ferrari',
      precio: '12500',
      descripcion: 'Marca	Renault',
      Modelo:	'Clio VRAY 2015',
      Color:	'Negro',
      Combustible:	'Nafta',
      Puertas:	5,
      Transmision:	'Manual',
      Motor:'1.2',
      photo:"../assets/ferrari.jpg",
      photob:"../assets/BaulFerrari.jpg",
      photoi:"../assets/FERRARIINTERIOR.jpg"
    },
    {
      id: uuid(),
      nombre: 'Bugatti',
      precio: '12500',
      descripcion: 'Marca	Renault',
      Modelo:	'Clio VRAY 2015',
      Color:	'Negro',
      Combustible:	'Nafta',
      Puertas:	5,
      Transmision:	'Manual',
      Motor:'1.2',
      photo:"../assets/bugatti.jpg",
      photob:"../assets/bugattibaul.jpg",
      photoi:"../assets/BUGATTIINTERIOR.jpg"
    }
        
    ]

    findAll(){
        return this.products;
    }
    findOneById(id: string){
        console.log({id});
        const products = this.products.find((products) => products.id === id);
        if (!products) {
          throw new NotFoundException(`Product with id '${id}' not found`);
        }
        return products;
    }


   
   }


