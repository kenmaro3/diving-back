import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BasicInfo} from "./basicInfo.entity";
import {UserModule} from "../user/user.module";
import {AuthorizationModule} from "../authorization/authorization.module";
import {FileService} from "../file/file.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([BasicInfo]),
        UserModule,
        AuthorizationModule
    ],
})
export class BasicInfoModule {}