import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Spot } from "./spot.entity";
import { Repository } from "typeorm";
import { Like as LIKE } from "typeorm";
import { SpotDto } from "./dto/spot.dto";
import { UpdateSpotDto } from "./dto/update-spot.dto";
import { FileService } from "src/file/file.service";

@Injectable()
export class SpotService {
    constructor(@InjectRepository(Spot) private spotRepository: Repository<Spot>,
        private fileService: FileService

    ) {
    }

    async createSpot(spotDto: SpotDto, files): Promise<Spot> {
        console.log("here createspot")
        console.log(files)
        const { picture1, picture2, picture3, picture4, picture5, picture6 } = files

        const condition = picture1 || picture2 || picture3 || picture4 || picture5 || picture6

        if (!condition) {
            //throw new HttpException('Image not provided', HttpStatus.BAD_REQUEST)
            const spot = new Spot()
            spot.name = spotDto.name
            spot.zip = spotDto.zip
            spot.prefecture = spotDto.prefecture
            spot.address1 = spotDto.address1
            spot.address2 = spotDto.address2
            spot.address3 = spotDto.address3
            spot.lat = spotDto.lat
            spot.lng = spotDto.lng
            spot.access = spotDto.access
            spot.parking = spotDto.parking
            spot.zip = spotDto.zip
            spot.phone = spotDto.phone
            spot.hp = spotDto.hp
            spot.close = spotDto.close
            spot.open = spotDto.open
            spot.min_price = spotDto.min_price
            spot.rental_price = spotDto.rental_price
            spot.other = spotDto.other
            spot.date_and_time_published = new Date();
            await this.spotRepository.save(spot)
            return this.getSpotById(spot.id)
        }
        else {
            var picturePath1 = null
            var picturePath2 = null
            var picturePath3 = null
            var picturePath4 = null
            var picturePath5 = null
            var picturePath6 = null

            if (picture1){
                picturePath1 = await this.fileService.createFile(picture1[0])
            }
            if(picture2){
                picturePath2 = await this.fileService.createFile(picture2[0])
            }
            if(picture3){
                picturePath3 = await this.fileService.createFile(picture3[0])
            }
            if(picture4){
                picturePath4 = await this.fileService.createFile(picture4[0])
            }
            if(picture5){
                picturePath5 = await this.fileService.createFile(picture5[0])
            }
            if(picture6){
                picturePath6 = await this.fileService.createFile(picture6[0])
            }

            const spot = new Spot()
            spot.name = spotDto.name
            spot.zip = spotDto.zip
            spot.prefecture = spotDto.prefecture
            spot.address1 = spotDto.address1
            spot.address2 = spotDto.address2
            spot.address3 = spotDto.address3
            spot.lat = spotDto.lat
            spot.lng = spotDto.lng
            spot.access = spotDto.access
            spot.parking = spotDto.parking
            spot.zip = spotDto.zip
            spot.phone = spotDto.phone
            spot.hp = spotDto.hp
            spot.close = spotDto.close
            spot.open = spotDto.open
            spot.min_price = spotDto.min_price
            spot.rental_price = spotDto.rental_price
            spot.other = spotDto.other
            spot.date_and_time_published = new Date();

            spot.image1 = picturePath1
            spot.image2 = picturePath2
            spot.image3 = picturePath3
            spot.image4 = picturePath4
            spot.image5 = picturePath5
            spot.image6 = picturePath6


            await this.spotRepository.save(spot)
            return this.getSpotById(spot.id)

        }
    }

    async updateSpot(updateSpotDto: UpdateSpotDto, files): Promise<Spot> {
        const { picture1, picture2, picture3, picture4, picture5, picture6 } = files

        const condition = picture1 || picture2 || picture3 || picture4 || picture5 || picture6

        if (!condition) {
            const name = updateSpotDto.name
            const zip = updateSpotDto.zip
            const prefecture = updateSpotDto.prefecture
            const address1 = updateSpotDto.address1
            const address2 = updateSpotDto.address2
            const address3 = updateSpotDto.address3
            const lat = updateSpotDto.lat
            const lng = updateSpotDto.lng
            const access = updateSpotDto.access
            const parking = updateSpotDto.parking
            const phone = updateSpotDto.phone
            const hp = updateSpotDto.hp
            const close = updateSpotDto.close
            const open = updateSpotDto.open
            const min_price = updateSpotDto.min_price
            const rental_price = updateSpotDto.rental_price
            const other = updateSpotDto.other
            await this.spotRepository.update(updateSpotDto.spot_id, { name, zip, prefecture, address1, address2, address3, lat, lng, access, parking, phone, hp, close, open, min_price, rental_price, other })
            return this.getSpotById(updateSpotDto.spot_id)
        }
        else{
            var picturePath1 = null
            var picturePath2 = null
            var picturePath3 = null
            var picturePath4 = null
            var picturePath5 = null
            var picturePath6 = null

            if (picture1){
                picturePath1 = await this.fileService.createFile(picture1[0])
            }
            if(picture2){
                picturePath2 = await this.fileService.createFile(picture2[0])
            }
            if(picture3){
                picturePath3 = await this.fileService.createFile(picture3[0])
            }
            if(picture4){
                picturePath4 = await this.fileService.createFile(picture4[0])
            }
            if(picture5){
                picturePath5 = await this.fileService.createFile(picture5[0])
            }
            if(picture6){
                picturePath6 = await this.fileService.createFile(picture6[0])
            }

            const name = updateSpotDto.name
            const zip = updateSpotDto.zip
            const prefecture = updateSpotDto.prefecture
            const address1 = updateSpotDto.address1
            const address2 = updateSpotDto.address2
            const address3 = updateSpotDto.address3
            const lat = updateSpotDto.lat
            const lng = updateSpotDto.lng
            const access = updateSpotDto.access
            const parking = updateSpotDto.parking
            const phone = updateSpotDto.phone
            const hp = updateSpotDto.hp
            const close = updateSpotDto.close
            const open = updateSpotDto.open
            const min_price = updateSpotDto.min_price
            const rental_price = updateSpotDto.rental_price
            const other = updateSpotDto.other

            const image1 = await picturePath1
            const image2 = await picturePath2
            const image3 = await picturePath3
            const image4 = await picturePath4
            const image5 = await picturePath5
            const image6 = await picturePath6

            var tmp = {}
            tmp["name"] = name
            tmp["zip"] = zip
            tmp["prefecture"] = prefecture
            tmp["address1"] = address1
            tmp["address2"] = address2
            tmp["address3"] = address3
            tmp["lat"] = lat
            tmp["lng"] = lng
            tmp["access"] = access
            tmp["parking"] = parking
            tmp["phone"] = phone
            tmp["hp"] = hp
            tmp["close"] = close
            tmp["open"] = open
            tmp["min_price"] = min_price
            tmp["rental_price"] = rental_price
            tmp["other"] = other
            if(updateSpotDto.is_image1_updated == "true"){
                tmp["image1"] = image1
            }
            if(updateSpotDto.is_image2_updated == "true"){
                tmp["image2"] = image2
            }
            if(updateSpotDto.is_image3_updated == "true"){
                tmp["image3"] = image3
            }
            if(updateSpotDto.is_image4_updated == "true"){
                tmp["image4"] = image4
            }
            if(updateSpotDto.is_image5_updated == "true"){
                tmp["image5"] = image5
            }
            if(updateSpotDto.is_image6_updated == "true"){
                tmp["image6"] = image6
            }
            await this.spotRepository.update(updateSpotDto.spot_id, tmp)
            return this.getSpotById(updateSpotDto.spot_id)

        }
    }

    async getAllSpots(): Promise<Spot[]> {
        return await this.spotRepository.find({
        })
    }

    async getLatests(num: number): Promise<Spot[]> {
        return this.spotRepository.find({
            order: { date_and_time_published: 'DESC' },
            take: num,
            relations: ['user_likes', 'user_ratings']
        })
    }

    async getSpotById(spot_id: number): Promise<Spot> {
        const spot = await this.spotRepository.findOne(spot_id, {
            relations: ['user_likes', 'user_ratings']
        })
        if (spot) {
            return spot
        } else {
            throw new HttpException('Spot not found', HttpStatus.NOT_FOUND)
        }
    }

    async getSpotByKeyword(keyword: string): Promise<Spot[]> {
        const loadedSpots = await this.spotRepository.find({
            // title: LIKE(`%${keyword}%`)
            relations: ['user_likes', 'user_ratings']
        });
        return loadedSpots
    }


    async deleteSpotById(spot_id: number): Promise<void> {
        const result = await this.spotRepository.delete(spot_id);

        if (result.affected === 0) {
            throw new NotFoundException();
        }
    }

    async getTodaySpots(quantity: number) {
        return this.spotRepository.find({
            // order: { date_and_time_published: 'DESC' },
            // take: quantity
        })
    }
}