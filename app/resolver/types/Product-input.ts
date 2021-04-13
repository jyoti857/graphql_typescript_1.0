import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Product } from "../../entities/Product";


@InputType()
export class ProductInput implements Partial<Product>{
  
  @Field()
  name: String;

  @Field()
  @Length(1, 255)
  description: String;

  @Field()
  color: String;

  @Field()
  stock: number;

  @Field()
  price: number;

  @Field(() => String)
  categories_id: any;
}