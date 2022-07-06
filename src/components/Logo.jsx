import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link
      to="/"
      className="font-logo font-black text-4xl pt-2 m-0 cursor-pointer"
    >
      Vastra
    </Link>
  );
}
