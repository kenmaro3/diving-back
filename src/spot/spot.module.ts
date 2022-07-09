import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Spot} from "./spot.entity";
import {UserModule} from "../user/user.module";
import {SpotService} from "./spot.service";
import {SpotController} from "./spot.controller";
import {AuthorizationModule} from "../authorization/authorization.module";
import {FileService} from "../file/file.service";
import { RatingModule } from 'src/rating/rating.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Spot]),
        UserModule,
        RatingModule,
        AuthorizationModule
    ],
    providers: [SpotService, FileService],
    controllers: [SpotController],
    exports: [SpotService]
})
export class SpotModule {}
