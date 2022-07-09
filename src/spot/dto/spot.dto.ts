import {IsInt, IsNumber, IsString, Length, MaxLength, MinLength, IsNotEmpty } from "class-validator";

export class SpotDto{

    @IsString({message: 'Name must be string'})
    @IsNotEmpty()
    readonly name: string;

    @IsString({message: 'zip must be string'})
    readonly zip: string;

    @IsString({message: 'prefecture must be string'})
    readonly prefecture: string;

    @IsString({message: 'address1 must be string'})
    readonly address1: string;

    @IsString({message: 'address2 must be string'})
    readonly address2: string;

    @IsString({message: 'address3 must be string'})
    readonly address3: string;

    @IsString()
    readonly lat: string;

    @IsString()
    readonly lng: string;

    @IsString({message: 'access must be string'})
    readonly access: string;

    @IsString({message: 'parking must be string'})
    readonly parking: string;

    @IsString({message: 'phone must be string'})
    readonly phone: string;

    @IsString({message: 'hp must be string'})
    readonly hp: string;

    @IsString({message: 'close must be string'})
    readonly close: string;

    @IsString({message: 'open must be string'})
    readonly open: string;

    @IsString({message: 'min_price must be string'})
    readonly min_price: string;

    @IsString({message: 'rental_price must be string'})
    readonly rental_price: string;




    @IsString({message: 'other must be string'})
    readonly other: string;


}

