import { TicketApiResponse } from "../types/definitions";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export const fetchTickets = async (
  page: number = 1,
  search: string = "",
  userType: string = "local",
): Promise<TicketApiResponse> => {
  const query = new URLSearchParams({
    page: page.toString(),
    search,
    userType,
  });

  const response = await fetch(`${API_URL}/api/tickets?${query.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch tickets");
  }
  return response.json();
};
