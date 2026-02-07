import todoLogo from "../assets/to-do-logo.png";
const Header = () => {
  return (
    <header className="p-4 bg-blue-800 shadow-md">
      <div className="flex justify-center">
        <div className="w-[90%] flex justify-between">
          <div className="flex space-x-2">
            <h1 className="text-slate-200">Todo App</h1>
            <img className="animate-bounce" src={todoLogo} alt="logo" />
          </div>
          <nav className=""></nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
