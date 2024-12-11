import { NavLink, NavLinkProps } from "react-router";

type LinkProps = {
  children?: React.ReactNode;
} & NavLinkProps;

const Link = ({ children, ...props }: LinkProps) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `w-full rounded-md text-sm p-2 flex justify-center ${
          isActive ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-400"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default Link;
