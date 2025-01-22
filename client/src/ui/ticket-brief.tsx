import placeholder from "../../public/placeholder.png";

type TicketBriefProps = {
  title: string;
  description: string;
};

export function TicketBrief({ title, description }: TicketBriefProps) {
  return (
    <div className="flex items-start p-3 border border-gray-200 rounded-lg bg-white shadow-sm w-full">
      <div>
        <img
          className="w-16 h-16 object-cover rounded-full mr-4 flex-shrink-0"
          src={placeholder}
          alt="Placeholder"
          width={150}
          height={150}
        />
      </div>
      <div className="flex-1">
        <h4 className="text-base font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-500 break-words">{description}</p>
      </div>
    </div>
  );
}
