import {Body, Controller, Post, UseGuards, Param, Get, ParseIntPipe} from "@nestjs/common";
import {RatingService} from "./rating.service";
import {RatingDto} from "./dto/rating.dto";
import {AuthGuard} from "../authorization/auth.guard";

@Controller('ratings')
export class RatingController{
    constructor(private ratingService: RatingService) {
    }

    @UseGuards(AuthGuard)
    @Post('/create')
    async create(@Body() ratingDto: RatingDto){
        return await this.ratingService.create(ratingDto)
    }

    @Get('/rating/:rating_id')
    getById(@Param('rating_id', new ParseIntPipe()) rating_id: number){
        return this.ratingService.getById(rating_id)
    }

    @Get('/spot/:spot_id')
    getBySpotId(@Param('spot_id', new ParseIntPipe()) spot_id: number){
        return this.ratingService.getBySpotId(spot_id)
    }

    @Get()
    getAllSpots(){
        return this.ratingService.getAll()
    }

    @Get('/latest/:num')
    getLatests(@Param('num', new ParseIntPipe()) num: number){
        return this.ratingService.getLatests(num)
    }

}