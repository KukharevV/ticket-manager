import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type SearchProps = {
  placeholder: string;
  value: string;
  handleSearchChange: (term: string) => void;
};

export default function Search({
  placeholder,
  value,
  handleSearchChange,
}: SearchProps) {
  return (
    <div className="relative flex flex-1 flex-grow mb-5 w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={value}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
