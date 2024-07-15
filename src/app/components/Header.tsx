"use client";

import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../helpers/classname";
import { useContext } from "react";
import { cartContext } from "@/context/CartContext";

const navLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/store",
    text: "Store",
  },
  {
    href: "/cart",
    text: "Cart",
  },
];

const Header = () => {
  const pathname = usePathname();
  const { totalQuantityPoduct } = useContext(cartContext);

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://strapi.io/">
        <img
          src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f154aaf7-96dd-4d9e-8ef6-05259f5a2b31/Strapi-Monogram/w=256,quality=90,fit=scale-down"
          className="mr-3 h-6 sm:h-9"
          alt="Strapi Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Strapi
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLinks.map((navLink) => (
          <Navbar.Link
            key={navLink.href}
            href={navLink.href}
            active={pathname === navLink.href}
            as={Link}
            className={cn(
              pathname === navLink.href &&
                "md:text-blue-500 bg-gray-600 rounded"
            )}
          >
            <span className="p-2 relative">
              {navLink.text}
              {navLink.text === "Cart" && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-5">
                  {totalQuantityPoduct}
                </div>
              )}
            </span>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
