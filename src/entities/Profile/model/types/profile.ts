import { type Country, type Currency } from "shared/const/common";

export interface Profile {
  first: string;
  lastname: string;
  age: 36;
  currency: Currency;
  country: string;
  city: Country;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
