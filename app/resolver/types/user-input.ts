import { User } from "../../entities/Users"
import { IsEmail, Length } from "class-validator";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UserInput implements Partial<User>{

  @Field()
  @Length(1, 255)
  username: String;

  @Field()
  @IsEmail()
  email: String;

  @Field(() => ID)
  cart_id: any;
}