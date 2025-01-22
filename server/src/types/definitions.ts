export type Location = { long: number; lat: number };

export type UserType = "local" | "tourist";

export const userOptions: UserType[] = ["local", "tourist"];

export type Ticket = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  userType: UserType;
};
