import { faker } from "@faker-js/faker";
import { Ticket, UserType } from "../types/definitions";
import { writeFileSync } from "fs";
import { resolve } from "path";

export function generateTickets(count: number = 100): Ticket[] {
  const tickets: Ticket[] = [];

  for (let i = 0; i < count; i++) {
    const userType: UserType = faker.helpers.arrayElement(["local", "tourist"]);

    tickets.push({
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      date: faker.date.future().toISOString(),
      location: `long: ${faker.location.longitude()} lat: ${faker.location.latitude()}`,
      userType,
    });
  }

  return tickets;
}
const OUTPUT_FOLDER = resolve(__dirname, "../data");
const OUTPUT_FILE = "tickets.json";

const tickets: Ticket[] = generateTickets(100);

try {
  writeFileSync(
    resolve(OUTPUT_FOLDER, OUTPUT_FILE),
    JSON.stringify(tickets, null, 2),
  );
  console.log(
    `Tickets generated and saved to ${resolve(OUTPUT_FOLDER, OUTPUT_FILE)}`,
  );
} catch (err) {
  console.error("Error saving tickets:", err);
}
