import { useNavigate, useSearchParams } from "react-router";
import { UserType, userOptions } from "../types/definitions";

type UserSelectorProps = {
  userType: UserType;
};

export function UserSelector({ userType }: UserSelectorProps) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (option: UserType) => {
    const params = new URLSearchParams(searchParams);
    params.set("userType", option);
    navigate(`/?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        User Type Selector
      </h2>
      <form className="space-y-4">
        {userOptions.map((option) => (
          <label
            key={option}
            className="flex items-center space-x-4 p-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <input
              type="radio"
              name="userType"
              value={option}
              checked={userType === option}
              onChange={() => handleChange(option)}
              className="form-radio h-5 w-5 text-sky-500 focus:ring-sky-300"
            />
            <span className="text-lg font-medium text-gray-700">{option}</span>
          </label>
        ))}
      </form>
    </div>
  );
}
