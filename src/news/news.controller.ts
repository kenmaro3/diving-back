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
import {NewsService} from "./news.service";
import {NewsDto} from "./dto/news.dto";
import {AuthGuard} from "../authorization/auth.guard";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('news')
export class NewsController{
    constructor(private newsService: NewsService) {
    }

    @UseGuards(AuthGuard)
    @Post('/create')
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture', maxCount: 1},
    ]))
    create(@UploadedFiles() files: Express.Multer.File, @Body() newsDto: NewsDto){
        return this.newsService.createNews(newsDto, files)
    }

    @Get('/news/:news_id')
    getNewsById(@Param('news_id', new ParseIntPipe()) news_id: number){
        return this.newsService.getNewsById(news_id)
    }

    @Get('/keyword/:keyword')
    getNewsByKeyword(@Param('keyword') keyword: string){
        return this.newsService.getNewsByKeyword(keyword)
    }

    @Delete('/news/:news_id')
    deleteNewsById(@Param('news_id', new ParseIntPipe()) news_id: number){
        return this.newsService.deleteNewsById(news_id)
    }

    @Get()
    getAllNewss(){
        return this.newsService.getAllNews()
    }

    @Get('/latest/:num')
    getLatests(@Param('num', new ParseIntPipe()) num: number){
        return this.newsService.getLatests(num)
    }

}