import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    OneToOne
} from "typeorm"

import {Like} from "../like/like.entity";
import { Rating } from "../rating/rating.entity";

@Entity({name: 'spots'})
export class Spot{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    zip: string;

    @Column()
    prefecture: string;

    @Column()
    address1: string;

    @Column({nullable: true})
    address2: string;

    @Column({nullable: true})
    address3: string;

    @Column({nullable: true})
    lat: string;

    @Column({nullable: true})
    lng: string;

    @Column({nullable: true})
    access: string;

    @Column({nullable: true})
    parking: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    hp: string;

    @Column({nullable: true})
    close: string;

    @Column({nullable: true})
    open: string;

    @Column({nullable: true})
    min_price: string;

    @Column({nullable: true})
    rental_price: string;

    @Column({nullable: true})
    other: string;

    @Column({nullable: true})
    image1: string;

    @Column({nullable: true})
    image2: string;

    @Column({nullable: true})
    image3: string;

    @Column({nullable: true})
    image4: string;

    @Column({nullable: true})
    image5: string;

    @Column({nullable: true})
    image6: string;

    @Column()
    date_and_time_published: Date;

    @OneToMany(() => Like, (like) => like.spot)
    user_likes: Like[]

    @OneToMany(() => Rating, (rating) => rating.spot)
    user_ratings: Rating[]


}