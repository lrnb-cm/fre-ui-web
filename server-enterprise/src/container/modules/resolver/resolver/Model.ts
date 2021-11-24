import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { Model } from '~/container/entity/model'
import { ModelDTO } from '../../../entity/DTOs/model'

@Resolver()
export class ModelResolver {
  /**
   * A simple query that just returns the 'Hello World' string.
   *
   * Example usage:
   * Access http://localhost:3000/graphql
   *
   * Then query 'hello
   */
  @Query(() => String)
  async hello() {
    return 'Hello World!'
  }

  /**
   * A simple create mutation
   * 
   */
  
  @Mutation(() => Model)
  async create(
    @Arg('payload') { title, description, email }: ModelDTO
  ): Promise<Model> {
    const model = await Model.create({
        title,
        description,
        email
    }).save()
    return model
  }

    @Query(() => Model)
    async read() {
        return Model.find()
    }

    @Query(() => Model)
    async readById(
        @Arg("id", () => Int) id: number
    ) {
        return Model.find({ id })
    }

    @Mutation(() => Model)
    async update(
        @Arg('payload') { id, title, description, email }: ModelDTO
    ) {
        await Model.update({ id }, { title, description, email })
        .then((m: any) => {
            return m
        })
    }

    @Mutation(() => Boolean)
    async deleteGame(
        @Arg("id", () => Int) id: number
    ) {
        await Model.delete({ id })
        return true
    }
}
