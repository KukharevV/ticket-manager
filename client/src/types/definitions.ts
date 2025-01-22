export interface Ticket {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  userType: string;
}

export interface PaginationMeta {
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export interface TicketApiResponse {
  data: Ticket[];
  meta: PaginationMeta;
}

export type UserType = "local" | "tourist";

export const userOptions: UserType[] = ["local", "tourist"];
