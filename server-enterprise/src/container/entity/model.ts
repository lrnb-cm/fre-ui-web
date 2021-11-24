import { Field, ID, ObjectType } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@ObjectType()
@Entity()
export class Model extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  title: string

  @Field()
  @Column()
  description: string

  @Field()
  @Column('text', { unique: true })
  email: string

  @Field()
  @Column()
  timestamp: Date
}
