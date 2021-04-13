import { Categories, CategoriesModel } from "../entities/Categories";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CategoriesInput } from "./types/categories-input";


@Resolver()
export class CategoriesResolver {

  @Query(() => Categories, {nullable: false})
  async returnSingleCategory(
    @Arg("id", () => String) id: string
  ){
    return await CategoriesModel.findById({_id: id})
  };

  @Query(() => [Categories])
  async returnAllCategories(){
    return await CategoriesModel.find();
  }

  @Mutation(() => Categories)
  async createCategory(
    @Arg("data") {name, description}: CategoriesInput): Promise<Categories> {
      const category = (await CategoriesModel.create({
          name,
          description
      })).save();
      return category;
  }

  // delete a category 
  async deleteCategory(@Arg("id", () => String) id: string){
    await CategoriesModel.deleteOne({_id: id});
    return true;
  }
}