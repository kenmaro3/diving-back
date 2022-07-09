import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { IsNumber, IsString} from "class-validator";
import {User} from "../user/user.entity";
import {Spot} from "../spot/spot.entity";

@Entity({name: 'ratings'})
export class Rating{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString({message: 'water must be string'})
    water_info: string;

    @Column()
    @IsString({message: 'animal must be string'})
    animal_info: string;

    @Column()
    @IsString({message: 'activity must be string'})
    activity_info: string;

    @Column()
    @IsString({message: 'other_info must be string'})
    other_info: string;

    @Column()
    @IsNumber()
    water_rating: number;

    @Column()
    @IsNumber()
    animal_rating: number;

    @Column()
    @IsNumber()
    activity_rating: number;

    @Column()
    date_and_time_published: Date

    @ManyToOne(() => User, (user) => user.ratings, {eager: true})
    user: number;

    @ManyToOne(() => Spot, (spot) => spot.user_ratings, {eager: true})
    spot: number;
}