import { getModelForClass, Prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import { Ref } from "../types";
import { Product } from "./Product";

@ObjectType({description: "The Cart model!!"})
export class Cart{

  @Field(() => ID)
  id: string;

  @Field(__type => String)
  @Prop({ref: Product, required: true})
  products: Ref<Product>;
  _doc: any;

}

export const CartModel = getModelForClass(Cart);