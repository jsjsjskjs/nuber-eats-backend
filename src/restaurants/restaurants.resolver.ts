import { Query } from '@nestjs/graphql'
import { Resolver } from '@nestjs/graphql'

@Resolver()
export class RestaurantResolver {
  @Query(() => Boolean)
  isPizzaGood(): Boolean {
    return true
  }
}
