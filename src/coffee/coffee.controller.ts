import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoffeeService } from './coffee.service';

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
    create(@Body() body:string) {
        return this.coffeeService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.coffeeService.update(id,body)
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(id)
    }
}
