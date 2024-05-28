import { UserAvatar } from "../UserAvatar/UserAvatar";

const NavBar = () => {
  return (
    <header className="flex flex-row justify-between items-center gap-2 p-2 bg-blue-50">
      <div className="flex flex-row gap-2">
        <p>Logo</p>
        <p>Archivo</p>
        <p>Edit</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <p>User</p>
        <UserAvatar />
      </div>
    </header>
  );
};

export default NavBar;
