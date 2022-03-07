import { Args, Mutation, Query } from '@nestjs/graphql'
import { Resolver } from '@nestjs/graphql'
import { createRestaurantDto } from './dtos/create-restaurant.dto'
import { Restuarnt } from './entities/restaurant.entity'

@Resolver(() => Restuarnt)
export class RestaurantResolver {
  @Query(() => [Restuarnt]) //배열을 리턴한다는 뜻 => graphql에선 밖에 씌워준다
  restaurant(@Args('veganOnly') veganOnly: boolean): Restuarnt[] {
    //배열을 리턴한다는 뜻 => typescript에선 entity바로 뒤에 []를 넣어준다
    console.log(veganOnly)
    return []
  }
  @Mutation(() => Boolean)
  createRestaurant(
    @Args() createRestaurantDto: createRestaurantDto
  ): boolean {
    console.log(createRestaurantDto)
    return true
  }
}
