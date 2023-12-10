import { IsString, IsEmail } from 'class-validator';
export class TestDto {
    @IsString()
    readonly name : string;
    @IsEmail()
    readonly email : string;
}