import { Order } from "../../entities/Order";
import { Field, InputType } from "type-graphql";


@InputType()
export class OrderInput implements Partial<Order> {

  @Field()
  user_id: String;

  @Field()
  payde: Boolean;

  @Field()
  date: Date;
}

