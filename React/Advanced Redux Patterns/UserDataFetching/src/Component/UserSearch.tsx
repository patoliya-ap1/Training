import { useEffect, useState } from "react";
import { fetchUsers } from "../features/users/users.slice";
import { useAppDispatch } from "../app/hooks";

const UserSearch = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchInput(e.currentTarget.value);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(fetchUsers(searchInput));
    }, 1000);

    return () => clearInterval(timerId);
  }, [searchInput, dispatch]);

  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="Search Users"
        className="p-2 shadow-md w-full outline-0"
        onChange={handleSearchInput}
      />
    </div>
  );
};
export default UserSearch;
