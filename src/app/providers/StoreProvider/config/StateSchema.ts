import {type counterSchema} from "entities/Counter";
import {type UserSchema} from "entities/User";
import {type loginSchema} from "features/AuthByUsername";

// главная стейт схема redux
export interface StateSchema {
  counter: counterSchema;
  user: UserSchema;
  loginForm: loginSchema;
}
