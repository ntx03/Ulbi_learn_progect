import ProfileCard from "../Profile/ui/ProfileCard/ProfileCard";

export type { Profile, ProfileSchema } from "./model/types/profile";

export { profileReducer, profileActions } from "./model/slice/ProfileSlice";
export { fetchProfileData } from "./model/servises/fetchProfileData/fetchProfileData";
export { ProfileCard };
