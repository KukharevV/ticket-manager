import { useQuery } from "@tanstack/react-query";
import Pagination from "./pagination";
import { TicketList } from "./ticket-list";
import { TicketApiResponse, UserType } from "../types/definitions";
import { fetchTickets } from "../api/tickets";

type TicketMenuProps = {
  userType: UserType;
  page: number;
  search: string;
  createPageURL: any;
};

export function TicketMenu({
  userType,
  page,
  search,
  createPageURL,
}: TicketMenuProps) {
  const { isPending, error, data } = useQuery<TicketApiResponse>({
    queryKey: ["tickets", page, search, userType],
    queryFn: () => fetchTickets(page, search, userType),
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader border-t-4 border-blue-500 w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) return <p>Failed to load tickets.</p>;

  const { data: tickets, meta } = data!;

  return (
    <div className="flex flex-col justify-start items-center">
      <TicketList userType={userType} tickets={tickets} />
      <Pagination
        currentPage={page}
        totalPages={meta.totalPages}
        createPageURL={createPageURL}
      />
    </div>
  );
}
