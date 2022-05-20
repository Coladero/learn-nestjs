import { Injectable } from '@nestjs/common';
import { Coffy } from './entities/coffy.entity';

@Injectable()
export class CoffeeService {
    private coffee: Coffy[] = [
        {
            id: 1,
            name: 'Mocha',
            brand: 'Starbuck',
            flavours: ['chocolate','milk']
        }
    ];

    findAll() {
        return this.coffee
    }
    findOne(id:string) {
        return this.coffee.find(item => item.id === +id)
    }
    create(createCoffeeDto: any) {
        return this.coffee.push(createCoffeeDto)
    }
    update(id:string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id)
        if (existingCoffee) {
            //update the existing coffee
        }
    }
    remove(id:string) {
        const coffeeIndex = this.coffee.findIndex(item => item.id === +id)
        if (coffeeIndex >= 0) {
            this.coffee.splice(coffeeIndex, 1)
        }   
    }
}
