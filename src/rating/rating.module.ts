import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Rating} from "./rating.entity";
import {UserModule} from "../user/user.module";
import {RatingService} from "./rating.service";
import {RatingController} from "./rating.controller";
import {AuthorizationModule} from "../authorization/authorization.module";
import { SpotModule } from 'src/spot/spot.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Rating]),
        UserModule,
        AuthorizationModule
    ],
    providers: [RatingService],
    controllers: [RatingController],
    exports: [RatingService]
})
export class RatingModule {}
