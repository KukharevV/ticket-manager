import { UserSelector } from "../ui/user-selector";
import Search from "../ui/search";
import { useLocation, useSearchParams } from "react-router";
import { userOptions, UserType } from "../types/definitions";

import { useDebouncedCallback } from "use-debounce";
import { TicketMenu } from "../ui/ticket-menu";

export default function TicketsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const userType = searchParams.get("userType") || "local";
  const page = Number(searchParams.get("page")) || 1;

  const isExistingOption = userOptions.includes(userType as UserType);
  const defaultUserOption = (isExistingOption ? userType : "local") as UserType;

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      page: newPage.toString(),
      search,
    });
  };

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    return `?${params.toString()}`;
  };

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term === "") {
      params.delete("search");
    } else {
      params.set("search", term);
    }
    params.set("page", "1");

    setSearchParams(params);
  }, 300);

  console.log(userType, "User");

  return (
    <div className="w-full">
      <header className="bg-gradient-to-r from-sky-500 to-blue-500 p-8 text-white shadow-md">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-center">
          Ticket Management System
        </h1>
        <UserSelector userType={defaultUserOption} />
      </header>
      <main className="m-10 flex flex-col items-center">
        <Search
          placeholder="Search tickets..."
          value={search}
          handleSearchChange={handleSearch}
        />
        <TicketMenu
          userType={defaultUserOption}
          search={search}
          page={page}
          createPageURL={createPageURL}
        />
      </main>
    </div>
  );
}
