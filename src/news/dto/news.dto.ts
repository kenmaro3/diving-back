import {IsInt, IsNumber, IsString, Length, MaxLength, MinLength, IsNotEmpty } from "class-validator";

export class NewsDto{
    @IsString({message: 'title must be string'})
    @IsNotEmpty()
    readonly title: string;

    @IsString({message: 'content must be string'})
    @IsNotEmpty()
    readonly content: string;
}