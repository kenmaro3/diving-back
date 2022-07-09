export class RatingDto{
    readonly user_id: number;
    readonly spot_id: number;
    readonly water_info: string;
    readonly animal_info: string;
    readonly activity_info: string;
    readonly water_rating: number;
    readonly animal_rating: number;
    readonly activity_rating: number;
    readonly other_info: string;
}