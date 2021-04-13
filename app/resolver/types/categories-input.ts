import { Length } from "class-validator";
import { ObjectId } from "mongoose";
import { Field, InputType } from "type-graphql";
import { Categories } from "../../entities/Categories";


@InputType()
export class CategoriesInput implements Partial<Categories> {
  
  @Field()
  name: string;

  @Field()
  @Length(1, 255)
  description: String;

  @Field()
  color: String;

  @Field()
  stock: number;

  @Field(() => String)
  category_id: ObjectId;
}