import { Request, Response } from "express";
import { getTickets } from "../models/ticket-model";
import { paginate } from "../services/pagination-service";
import { Ticket } from "../types/definitions";

const ITEMS_PER_PAGE = 10;

export const getTicketsHandler = (req: Request, res: Response): void => {
  const {
    page = "1",
    size = `${ITEMS_PER_PAGE}`,
    search = "",
    userType = "local",
  } = req.query;

  const tickets: Ticket[] = getTickets();

  const filteredTickets = tickets.filter((ticket) => {
    if (ticket.userType !== userType.toString().toLowerCase()) {
      return false;
    }

    const matches =
      ticket.title.toLowerCase().includes(search.toString().toLowerCase()) ||
      ticket.description
        .toLowerCase()
        .includes(search.toString().toLowerCase());

    return matches;
  });

  const totalItems = filteredTickets.length;

  const totalPages = Number(size) <= 0 ? 0 : ITEMS_PER_PAGE;
  const parsedPage = Number(page) <= 0 ? 1 : Number(page);

  const paginatedTickets = paginate(filteredTickets, parsedPage, totalPages);

  res.json({
    data: paginatedTickets,
    meta: {
      totalItems,
      currentPage: parsedPage,
      totalPages: Math.ceil(totalItems / totalPages),
    },
  });
};
