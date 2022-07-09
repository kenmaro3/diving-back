import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne
} from "typeorm"

import {User} from "../user/user.entity";
import {Spot} from "../spot/spot.entity";

@Entity({name: 'basicinfo'})
export class BasicInfo{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column({nullable: true})
    access: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    web: string;

    @Column({nullable: true})
    image: string;

    @Column({nullable: true})
    price: string;

    @OneToOne(() => Spot)
    info: Spot


}