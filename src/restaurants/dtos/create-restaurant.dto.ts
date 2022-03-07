import { ArgsType, Field, InputType } from "@nestjs/graphql";

//InputType을 사용해서 resolver.ts 파일에 하나하나 넣을 수 있지만
//dto 파일에서 한 번에 관리하고 유효성 검사까지 하기 위해 ArgsType으로 가보자 
@ArgsType()
export class createRestaurantDto {
  @Field(type => String)
  name: string
  @Field(type => Boolean)
  isVegan: boolean
  @Field(type => String)
  address: string
  @Field(type => String)
  ownersName: string
}