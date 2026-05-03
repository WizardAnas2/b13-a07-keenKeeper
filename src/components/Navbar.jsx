"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", path: "/", icon: "/home-icon.png" },
    { name: "Timeline", path: "/timeline", icon: "/timeline-icon.png" },
    { name: "Stats", path: "/stats", icon: "/stats-icon.png" },
  ];
  return (
    <div className="navbar bg-base-100 px-4 md:px-10 border-none ">
      <div className="flex-1">
        <Link href="/">
          <img src="/logo.png" alt="KeenKeeper" className="h-10" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                href={link.path} 
                className={pathname === link.path ? "text-primary font-bold border-b-2 border-primary" : ""}
              >
                <img src={link.icon} alt="" className="w-5 h-5" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;