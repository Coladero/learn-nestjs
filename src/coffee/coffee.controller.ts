import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
    @Get()
    findAll() {
        return 'Give all the coffees'
    }
    @Get(':id')
    findOne(@Param('id') id:string) {
        return `This action return ${id} coffee`
    }

    @Post()
    create(@Body() body:string) {
        return body;
    }
}
