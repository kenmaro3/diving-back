import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {News} from "./news.entity";
import {NewsService} from "./news.service";
import {NewsController} from "./news.controller";
import {FileService} from "../file/file.service";
import {AuthorizationModule} from "../authorization/authorization.module";


@Module({
    imports: [
        TypeOrmModule.forFeature([News]),
        AuthorizationModule
    ],
    providers: [NewsService, FileService],
    controllers: [NewsController],
    exports: [NewsService]
})
export class NewsModule {}
