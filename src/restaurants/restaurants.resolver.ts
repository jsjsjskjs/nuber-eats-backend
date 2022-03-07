import { Query } from '@nestjs/graphql'
import { Resolver } from '@nestjs/graphql'
import { Restuarnt } from './entities/restaurant.entity'

@Resolver(() => Restuarnt)
export class RestaurantResolver {
  @Query(() => Restuarnt)
  myRestaurant() {
    return true
  }
  
}
