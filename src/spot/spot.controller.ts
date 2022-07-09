import {
    Body,
    Controller,
    Get,
    Delete,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import {SpotService} from "./spot.service";
import {SpotDto} from "./dto/spot.dto";
import {UpdateSpotDto} from "./dto/update-spot.dto";
import {AuthGuard} from "../authorization/auth.guard";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('spots')
export class SpotController{
    constructor(private spotService: SpotService) {
    }

    @UseGuards(AuthGuard)
    @Post('/create')
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture1', maxCount: 1},
        {name: 'picture2', maxCount: 1},
        {name: 'picture3', maxCount: 1},
        {name: 'picture4', maxCount: 1},
        {name: 'picture5', maxCount: 1},
        {name: 'picture6', maxCount: 1},
    ]))
    create(@UploadedFiles() files: Express.Multer.File, @Body() spotDto: SpotDto){
        return this.spotService.createSpot(spotDto, files)
    }


    @UseGuards(AuthGuard)
    @Post('/update')
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture1', maxCount: 1},
        {name: 'picture2', maxCount: 1},
        {name: 'picture3', maxCount: 1},
        {name: 'picture4', maxCount: 1},
        {name: 'picture5', maxCount: 1},
        {name: 'picture6', maxCount: 1},
    ]))
    async update(@UploadedFiles() files: Express.Multer.File, @Body() updateSpotDto: UpdateSpotDto){
        return this.spotService.updateSpot(updateSpotDto, files)
    }

    @Get('/spot/:spot_id')
    getSpotById(@Param('spot_id', new ParseIntPipe()) spot_id: number){
        return this.spotService.getSpotById(spot_id)
    }

    @Get('/keyword/:keyword')
    getSpotByKeyword(@Param('keyword') keyword: string){
        return this.spotService.getSpotByKeyword(keyword)
    }

    @Delete('/spot/:spot_id')
    deleteSpotById(@Param('spot_id', new ParseIntPipe()) spot_id: number){
        return this.spotService.deleteSpotById(spot_id)
    }

    @Get()
    getAllSpots(){
        return this.spotService.getAllSpots()
    }

    @Get('/latest/:num')
    getLatests(@Param('num', new ParseIntPipe()) num: number){
        return this.spotService.getLatests(num)
    }


    @Get('/today?')
    getTodaySpots(@Query('quantity') quantity: number){
        return this.spotService.getTodaySpots(quantity)
    }

}