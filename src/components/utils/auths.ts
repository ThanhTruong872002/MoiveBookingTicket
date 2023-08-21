import { IUser } from "../../@types/User";

export const saveAccessTokenToLS = (access_token: string) => {
  return localStorage.setItem("access_token", access_token);
};

export const setProfileToLS = (profile: IUser) => {
  localStorage.setItem("profile", JSON.stringify(profile));
};

export const localStorageEventTarget = new EventTarget();

export const clearAccessToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("profile");
  const clearLSEvent = new Event("clearLS");
  localStorageEventTarget.dispatchEvent(clearLSEvent);
};

export const getAccessTokenFromLS = () => {
  return localStorage.getItem("access_token") || "";
};

export const getProfileFromLs = () => {
  const result = localStorage.getItem("profile");
  return result ? JSON.parse(result) : null;
};
