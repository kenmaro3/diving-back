import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { News } from "./news.entity";
import {Repository, Like as LIKE} from "typeorm";
import { NewsDto } from "./dto/news.dto";
import { FileService } from "src/file/file.service";

@Injectable()
export class NewsService {
    constructor(@InjectRepository(News) private newsRepository: Repository<News>,
        private fileService: FileService

    ) {
    }

    async createNews(newsDto: NewsDto, files): Promise<News> {
        console.log("here createnews")
        console.log(files)
        const { picture } = files

        const condition = picture

        if (!condition) {
            //throw new HttpException('Image not provided', HttpStatus.BAD_REQUEST)
            const news = new News()
            news.title = newsDto.title
            news.content = newsDto.content
            news.date_and_time_published = new Date();
            await this.newsRepository.save(news)
            return this.getNewsById(news.id)
        }
        else {

            const picturePath = await this.fileService.createFile(picture[0])

            const news = new News()
            news.title = newsDto.title
            news.content = newsDto.content
            news.date_and_time_published = new Date();

            news.image = picturePath


            await this.newsRepository.save(news)
            return this.getNewsById(news.id)

        }
    }


    async getAllNews(): Promise<News[]> {
        return await this.newsRepository.find({
        })
    }

    async getLatests(num: number): Promise<News[]> {
        return this.newsRepository.find({
            order: { date_and_time_published: 'DESC' },
            take: num,
        })
    }

    async getNewsById(news_id: number): Promise<News> {
        const news = await this.newsRepository.findOne(news_id, {
        })
        if (news) {
            return news
        } else {
            throw new HttpException('News not found', HttpStatus.NOT_FOUND)
        }
    }

    async getNewsByKeyword(keyword: string): Promise<News[]> {
        const loadedNewss = await this.newsRepository.find({
            title: LIKE(`%${keyword}%`)
        });
        return loadedNewss
    }


    async deleteNewsById(news_id: number): Promise<void> {
        const result = await this.newsRepository.delete(news_id);

        if (result.affected === 0) {
            throw new NotFoundException();
        }
    }

}