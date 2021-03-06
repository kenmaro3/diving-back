import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";
import { UserModule } from './user/user.module';
import {User} from "./user/user.entity";
import { SpotModule } from './spot/spot.module';
import { RatingModule } from './rating/rating.module';
import {UserService} from "./user/user.service";
import { SecurityModule } from './security/security.module';
import { TokenModule } from './token/token.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { FileModule } from './file/file.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { NewsModule } from './news/news.module';
import { LikeModule } from './like/like.module';
import * as path from "path";



@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
    //   TypeOrmModule.forRoot({
    //       type: 'postgres',
    //       host: process.env.DB_HOST,
    //       port: Number(process.env.DB_PORT),
    //       username: process.env.DB_USERNAME,
    //       password: process.env.DB_PASSWORD,
    //       database: process.env.DB_NAME,
    //       entities: [],
    //       synchronize: true,
    //       autoLoadEntities: true
    //   }),
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: "localhost",
          port: 5432,
          username: "postgres",
          password: "password",
          database: "diving",
          entities: [],
          synchronize: true,
          autoLoadEntities: true
      }),
      UserModule,
      SpotModule,
      SecurityModule,
      TokenModule,
      AuthorizationModule,
      FileModule,
      RatingModule,
      NewsModule,
      ServeStaticModule.forRoot({
          rootPath: path.resolve(__dirname, 'static')
      }),
      LikeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
    constructor(private connection: Connection) {
        console.log(connection.isConnected)

    }
}
