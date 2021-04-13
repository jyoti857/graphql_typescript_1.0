import { Cart } from "../../entities/Cart";
import { Field, ID, InputType } from "type-graphql";


@InputType()
export class CartInput implements Partial<Cart>{
  
  @Field(() => ID)
  products?: any;

}