import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Rating} from "./rating.entity";
import {RatingDto} from "./dto/rating.dto";

@Injectable()
export class RatingService{
    constructor(@InjectRepository(Rating) private ratingRepository: Repository<Rating>) {
    }

    async create(ratingDto: RatingDto){
        const rating = new Rating()
        console.log("ratings will create===============")
        console.log(ratingDto)
        rating.user = ratingDto.user_id
        rating.spot = ratingDto.spot_id
        rating.water_info = ratingDto.water_info
        rating.water_rating = ratingDto.water_rating
        rating.animal_info = ratingDto.animal_info
        rating.animal_rating = ratingDto.animal_rating
        rating.activity_info = ratingDto.activity_info
        rating.activity_rating = ratingDto.activity_rating
        rating.other_info = ratingDto.other_info
        rating.date_and_time_published = new Date()
        
        const newRating =  await this.ratingRepository.save(rating)
        return await this.ratingRepository.findOne(newRating.id)
    }

    async getById(rating_id: number): Promise<Rating> {
        console.log("getByIdRating")
        console.log(rating_id)
        const rating = await this.ratingRepository.find({
            id: rating_id
        })
        if (rating) {
            return rating[0]
        } else {
            throw new HttpException('Spot not found', HttpStatus.NOT_FOUND)
        }
    }

    async getBySpotId(spot_id: number): Promise<Rating[]> {
        const rating = await this.ratingRepository.find({
            spot: spot_id
        })
        if (rating) {
            return rating
        } else {
            throw new HttpException('Spot not found', HttpStatus.NOT_FOUND)
        }
    }

    async getAll(): Promise<Rating[]> {
        return await this.ratingRepository.find({
        })
    }

    async getLatests(num: number): Promise<Rating[]> {
        return this.ratingRepository.find({
            order: { date_and_time_published: 'DESC' },
            take: num
        })
    }
}