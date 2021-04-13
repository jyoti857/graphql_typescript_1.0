import { getModelForClass, Prop } from "@typegoose/typegoose";
import { __Type } from "graphql";
import { Field, ObjectType } from "type-graphql";
import { Ref } from "../types";
import { Cart } from "./Cart";

@ObjectType({description: "User Model"})
export class User{

  @Field()
  id: Number;

  @Field()
  @Prop({require: true})
  username: String;

  @Field()
  @Prop({required: true})
  email: String;

  @Field(__Type => String)
  @Prop({ref: Cart, required: true})
  cart_id: Ref<Cart>

}

export const UserModel = getModelForClass(User);
