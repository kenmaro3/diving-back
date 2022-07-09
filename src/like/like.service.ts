import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Like} from "./like.entity";
import {LikeDto} from "./dto/like.dto";
import {UserService} from "../user/user.service";

@Injectable()
export class LikeService{
    constructor(@InjectRepository(Like) private likeRepository: Repository<Like>) {
    }

    async likeSpot(likeDto: LikeDto){
        const like = new Like()
        like.user = likeDto.user_id
        like.spot = likeDto.spot_id
        const newLike =  await this.likeRepository.save(like)
        return await this.likeRepository.findOne(newLike.id)
    }
}