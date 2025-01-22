type TicketDetailedProps = {
  title: string;
  description: string;
  date: string;
  location: string;
};

export function TicketDetailed({
  title,
  description,
  date,
  location,
}: TicketDetailedProps) {
  return (
    <div className="w-full max-w-[300px] min-h-[300px] p-4 border border-gray-300 rounded-lg bg-gray-100">
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-bold mr-1">Date:</span>
        {date}
      </p>
      <div className="text-sm text-gray-600 mb-2">
        <span className="font-bold mr-1">Location coordinates:</span>
        <p>{location}</p>
      </div>
    </div>
  );
}
