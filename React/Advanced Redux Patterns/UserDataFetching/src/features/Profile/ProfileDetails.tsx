import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { fetchProfile } from "./profile.slice";
import Loading from "../../Component/Loading";

const ProfileDetails = () => {
  const { profileId } = useParams();

  const profile = useAppSelector((state) => state.profileState.user);

  const userState = useAppSelector((state) => state.profileState.userState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile(profileId));
  }, [dispatch, profileId]);

  return (
    <div>
      {userState === "loading" && <Loading />}

      {profile && userState !== "loading" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex justify-center shadow-md">
            <img className="w-80" src={profile?.image} />
          </div>
          <div className="text-lg text-slate-800">
            <h2 className="text-3xl">
              {profile?.firstName} {profile?.maidenName} {profile?.lastName}
            </h2>
            <p>
              <span>Gender:</span> {profile?.gender}
            </p>
            <p>Age: {profile?.age}</p>
            <p>Email: {profile?.email}</p>
            <p>Phone: {profile?.phone}</p>
            <p>Birth Date: {profile?.birthDate}</p>
            <p>University: {profile?.university}</p>
          </div>
          {/* address */}
          <div className="shadow-md p-4 text-slate-700">
            <h3 className="text-2xl text-slate-800">Address</h3>
            <p>address: {profile?.address?.address}</p>
            <p>city: {profile?.address?.city}</p>
            <p>state: {profile?.address?.state}</p>
            <p>state code: {profile?.address?.stateCode}</p>
            <p>postal code: {profile?.address?.postalCode}</p>
            <p>country: {profile?.address?.country}</p>
          </div>
          {/* company */}
          <div className="shadow-md p-4 text-slate-700">
            <h3 className="text-2xl text-slate-800">Company</h3>
            <p>Department: {profile?.company?.department}</p>
            <p>Name: {profile?.company?.name}</p>
            <p>Title: {profile?.company?.title}</p>
            <h3>Address</h3>
            <p>address: {profile?.company?.address?.address}</p>
            <p>city: {profile?.company?.address?.city}</p>
            <p>state: {profile?.company?.address?.state}</p>
            <p>state code: {profile?.company?.address?.stateCode}</p>
            <p>postal code: {profile?.company?.address?.postalCode}</p>
            <p>country: {profile?.company?.address?.country}</p>
          </div>

          {/* bank */}
          <div className="shadow-md p-4 text-slate-700">
            <h3 className="text-2xl text-slate-800">Bank Information</h3>
            <p>Card Expire: {profile?.bank?.cardExpire}</p>
            <p>Card Number: {profile?.bank?.cardNumber}</p>
            <p>Card Type: {profile?.bank?.cardType}</p>
            <p>Currency: {profile?.bank?.currency}</p>
            <p>IBAN: {profile?.bank?.iban}</p>
          </div>
          {/* stats */}
          <div className="shadow-md p-4 text-slate-700">
            <h3 className="text-2xl text-slate-800">Medical Information</h3>
            <p>Blood Group: {profile?.bloodGroup}</p>
            <p>Height: {profile?.height}</p>
            <p>Weight: {profile?.weight}</p>
            <p>EyeColor: {profile?.eyeColor}</p>
            <p>
              Hair: {profile?.hair?.color} {profile?.hair?.type}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfileDetails;
