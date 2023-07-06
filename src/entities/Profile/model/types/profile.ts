import { type Currency } from "entities/Currency/model/types/currency";
import { type Country } from "entities/Country/model/types/country";

export interface Profile {
  first?: string;
  lastname?: string;
  age?: string | undefined;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
