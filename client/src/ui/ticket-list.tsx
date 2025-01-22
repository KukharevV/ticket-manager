import { TicketBrief } from "./ticket-brief";
import { TicketDetailed } from "./ticket-detailed";
import { Ticket, UserType } from "../types/definitions";

type TicketListProps = {
  userType: UserType;
  tickets: Ticket[];
};

export function TicketList({ userType, tickets }: TicketListProps) {
  if (userType === "local") {
    return (
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-5">
        {tickets.map((item) => (
          <li key={item.id}>
            <TicketDetailed
              title={item.title}
              description={item.description}
              location={item.location}
              date={item.date}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="list-none p-4 m-0 mb-5 max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col gap-4">
      {tickets.map((item) => {
        return (
          <li key={item.id}>
            <TicketBrief title={item.title} description={item.description} />
          </li>
        );
      })}
    </ul>
  );
}
