import { getModelForClass, Prop } from "@typegoose/typegoose";
import { __Type } from "graphql";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { Ref } from "../types";
import { Categories } from "./Categories";

@ObjectType({description: "The Product model"})
export class Product{

  @Field(() => ID)
  id: String;

  @Field()
  @Prop()
  name: String;

  @Field()
  @Prop()
  description: String;

  @Field()
  @Prop()
  color: String;

  @Field(_Type => Int)
  @Prop()
  stock: number;

  
  @Field(__Type => Int)
  @Prop()
  price: number;

  @Field(_type => String)
  @Prop({ref: Categories})
  categories_id: Ref<Categories>;
  _doc: any;
}

export const ProductModel = getModelForClass(Product);