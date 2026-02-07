import { NavLink } from "react-router-dom";

const UserCard = ({
  id,
  image,
  firstName,
}: {
  id: number;
  image: string;
  firstName: string;
}) => {
  return (
    <div className="flex space-x-2 shadow-md">
      <div>
        <img src={image} className="w-15" />
      </div>
      <div>
        <h3>{firstName}</h3>
        <NavLink to={`/profileDetails/${id}`}>View Profile</NavLink>
      </div>
    </div>
  );
};
export default UserCard;
