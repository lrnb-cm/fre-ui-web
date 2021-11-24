import { Ctx, Query, Resolver } from 'type-graphql'
import { Model } from '../../../entity/model'
import { ModelContext } from '../../../types/ModelContext'

@Resolver()
export class SessionResolver {
  /**
   * A user resolver that checks the session if the user exists, then returns those details.
   * Can return undefined (which is cast to null by GraphQL) if the user does not.
   */
  @Query(() => Model, { nullable: true })
  async get(@Ctx() ctx: ModelContext): Promise<Model | undefined> {
    if (!ctx.req.session!.id) {
      return undefined
    }
    return Model.findOne(ctx.req.session!.id)
  }
}
