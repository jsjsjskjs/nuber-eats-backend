import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";

//InputType을 사용해서 resolver.ts 파일에 하나하나 넣을 수 있지만
//dto 파일에서 한 번에 관리하고 유효성 검사까지 하기 위해 ArgsType으로 가보자 
@ArgsType()
export class createRestaurantDto {
  //npm i class-validator, class-transformer 적용 후 유효성 검사추가
  //유효성을 적용시키기 위해선 main.ts에 pipe도 추가해줘야 한다
  @Field(type => String)
  @IsString()
  @Length(5, 10)
  name: string
  
  @Field(type => Boolean)
  @IsBoolean()
  isVegan: boolean
  
  @Field(type => String)
  @IsString()
  address: string

  @Field(type => String)
  @IsString()
  ownersName: string
}