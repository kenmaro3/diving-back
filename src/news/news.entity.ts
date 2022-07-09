import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    OneToOne
} from "typeorm"


@Entity({name: 'news'})
export class News{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({nullable: true})
    content: string;

    @Column()
    date_and_time_published: Date;

    @Column({nullable: true})
    image: string;

}