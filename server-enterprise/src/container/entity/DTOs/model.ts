import { Field, InputType } from 'type-graphql'

@InputType()
export class ModelDTO {
    @Field()
    readonly id: number

    @Field()
    readonly title: string
  
    @Field()
    readonly description: string
  
    @Field()
    readonly email: string
  
    @Field()
    readonly timestamp: Date
}
