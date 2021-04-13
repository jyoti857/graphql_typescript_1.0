import { getModelForClass, Prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({description: "The Category model"})
export class Categories{

    @Field(() => ID)
    id: string;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    description: String;
}

export const CategoriesModel = getModelForClass(Categories);