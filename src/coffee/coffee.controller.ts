import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService:CoffeeService) {}
    @Get()
    findAll(@Res() response) {
        response.status(200).send('Give all the coffees')
        return this.coffeeService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.coffeeService.findOne(id)
        
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id,updateCoffeeDto)
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(id)
    }
}
