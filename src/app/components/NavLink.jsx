import Link from "next/link";

const NavLink = ({ href, title, resume}) => {
  return (
    <Link
      href={href}
      className="block py-2 sm:m-2 px-3 rounded-full bg-gradient-to-br from-primary-600 hover:from-primary-700 hover:to-secondary-700 to-secondary-600 text-white"
    >
      {title}
      {resume}
    </Link>
  );
};

export default NavLink;
