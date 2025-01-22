import { readFileSync } from "fs";
import { join } from "path";
import { Ticket } from "../types/definitions";

const ticketsFilePath = join(__dirname, "../data/tickets.json");

export const getTickets = (): Ticket[] => {
  try {
    const fileData = readFileSync(ticketsFilePath, "utf8");
    const tickets: Ticket[] = JSON.parse(fileData);

    return tickets;
  } catch (err) {
    console.error("Error reading or parsing tickets JSON:", err);
    return [];
  }
};
