import type React from "react";
import { useAppSelector } from "../../app/hooks.ts";
import UserCard from "../../Component/UserCard.tsx";
import UserSearch from "../../Component/UserSearch.tsx";
import Loading from "../../Component/Loading.tsx";
import Banner from "../../Component/Banner.tsx";
import RTKSmallBanner from "../../assets/RTKSmallBanner.jpg";
import RTKbanner from "../../assets/RTKbanner.jpg";

export type UserCardInt = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  username: string;
  image: string;
};

const UsersList: React.FC = () => {
  const { users, usersState } = useAppSelector((state) => state.usersState);

  return (
    <div>
      <UserSearch />
      {usersState === "loading" && <Loading />}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
        {users &&
          usersState !== "loading" &&
          users.map((userObj) => {
            return (
              <UserCard
                key={userObj.id}
                image={userObj.image}
                firstName={userObj.firstName}
                id={userObj.id}
              />
            );
          })}
      </div>
      <div className="grid sm:grid-cols-3 gap-3 mt-8 shadow-md">
        <div className="sm:col-span-1">
          <Banner imgUrl={RTKSmallBanner} />
        </div>
        <div className="sm:col-span-2">
          <Banner imgUrl={RTKbanner} />
        </div>
      </div>
    </div>
  );
};
export default UsersList;
