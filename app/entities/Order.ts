import { getModelForClass, Prop } from "@typegoose/typegoose";
import { __Type } from "graphql";
import { Field, ID, ObjectType } from "type-graphql";
import { Ref } from "../types";
import { Product } from "./Product";

@ObjectType({description: "Order Model"})
export class Order{

  @Field(() => ID)
  id: String;

  @Field()
  @Prop({nullable: true})
  user_id: String;

  @Field()
  @Prop({nullable: true})
  payde: Boolean;

  @Field()
  @Prop({default: new Date(), required: true, nullable: true })
  date: Date;

  //@Field(__Type => Product)
  @Prop({ref: Product, required: true})
  products: Ref<Product>
}

export const OrderModel = getModelForClass(Order);