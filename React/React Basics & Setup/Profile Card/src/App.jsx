import { useState } from "react";
import ProfileCard from "./Component/ProfileCard";
import avatar from "./assets/avatar.jpg";

function App() {
  const [cardInfo, setCardInfo] = useState({
    name: "John Doe",
    avatar: avatar,
    role: "MERN Stack",
  });

  const { name: cardName, avatar: cardAvatar, role: cardRole } = cardInfo;

  return (
    <>
      <button className="fixed"></button>
      <div className="flex justify-center items-center h-screen transition-colors duration-300 ease-in dark:bg-slate-900 text-slate-300">
        <ProfileCard avatar={cardAvatar} name={cardName} role={cardRole} />
      </div>
    </>
  );
}

export default App;
