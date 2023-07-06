import ProfileCard from "../Profile/ui/ProfileCard/ProfileCard";

export { getProfileValidateErrors } from "./model/selectors/getProfileValidateErrors/getProfileValidateErrors";

export { getProfileError } from "./model/selectors/getProfileError/getProfileError";
export { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
export { getProfileData } from "./model/selectors/getProfileData/getProfileData";
export { getProfileReadonly } from "./model/selectors/getProfileReadonly/getProfileReadonly";
export { getProfileForm } from "./model/selectors/getProfileForm/getProfileForm";

export type { Profile, ProfileSchema } from "./model/types/profile";

export { profileReducer, profileActions } from "./model/slice/ProfileSlice";
export { fetchProfileData } from "./model/servises/fetchProfileData/fetchProfileData";
export { updateProfileData } from "./model/servises/updateProfileData/updateProfileData";

export { ProfileCard };
