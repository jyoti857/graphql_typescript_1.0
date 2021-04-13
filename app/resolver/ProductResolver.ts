import { CategoriesModel, Categories } from "../entities/Categories";
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { Product, ProductModel } from '../entities/Product';
import { ProductInput } from "./types/Product-input";


@Resolver(_of => Product)
export class ProductResolver{

  @Query(_returns => Product, {nullable: false })
  async returnSingleProduct(@Arg('id', () => String) id: string){
    return await ProductModel.findById({_id: id})
  }

  // get all the product 
  @Query(_returns => [Product])
  async returnAllProduct(){
    return await ProductModel.find();
  }

  // create Product
  @Mutation(() => Product)
  async createProduct(@Arg("data") {name, description, color, stock, categories_id, price}: ProductInput): Promise<Product>{
    const product = (await ProductModel.create({
      name,
      description,
      color,
      stock,
      price,
      categories_id
    })).save();
    return product;
  }
  
  // delete a product
  @Mutation(() => Boolean) 
  async deleteProduct(@Arg('id') id: string){
    await ProductModel.deleteOne({_id: id});
    return true;
  }

  @FieldResolver(_type => (Categories))
  async Category(@Root() product: Product): Promise<Categories>{
    console.log(product, "product");
    return (await CategoriesModel.findById(product._doc.categories_id))!;
  }
}
  