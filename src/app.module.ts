import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    //autoSchemaFile: join(process.cwd(), 'src/schema.gql')로 지정하면 schema.gql 파일이 자동생성 되지만
    //nestjs는 resoler.ts 파일에서 관리가 가능하기 때문에 true로 변경해주면 파일을 직접 갖고 있지 않을 수 있도록 할 수 있다.
    autoSchemaFile: true
  }), RestaurantsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
