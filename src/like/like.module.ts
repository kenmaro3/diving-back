import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Like} from "./like.entity";
import {UserModule} from "../user/user.module";
import { SpotModule } from 'src/spot/spot.module';
import {UserService} from "../user/user.service";
import {LikeService} from "./like.service";
import {LikeController} from "./like.controller";
import {AuthorizationModule} from "../authorization/authorization.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Like]),
        UserModule,
        SpotModule,
        AuthorizationModule
    ],
    providers: [LikeService],
    controllers: [LikeController]
})
export class LikeModule {}
