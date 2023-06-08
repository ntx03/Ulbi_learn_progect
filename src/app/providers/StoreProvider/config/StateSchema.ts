import { type counterSchema } from "entities/Counter";
import { type UserSchema } from "entities/User";

export interface StateSchema {
  counter: counterSchema;
  user: UserSchema;
}
