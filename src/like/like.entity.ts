import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";
import {Spot} from "../spot/spot.entity";

@Entity({name: 'likes'})
export class Like{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.likes, {eager: true})
    user: number;

    @ManyToOne(() => Spot, (spot) => spot.user_likes, {eager: true})
    spot: number;
}