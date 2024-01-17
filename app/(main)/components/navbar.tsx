"use client";
import { cn, routes } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="">
      {" "}
      <div className="md:w-4/5 hidden h-24 mx-auto font-mono font-semibold md:flex justify-between">
        <div className="block">
          <Image src="/logo_no_bg.png" width={100} height={100} alt={""} />
        </div>
        <div className="flex justify-center items-center gap-x-6">
          {routes.map((item, index) => (
            <div
              className={cn(
                "text-white tracking-wide",
                item.route == pathname &&
                  "text-secy border-b border-secy transition duration-400 ease-in-out"
              )}
              key={index}
            >
              <Link href={item.route}>{item.name.toUpperCase()} </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center  text-secy gap-x-4 mr-6">
          <Link href="facebook" className="bg-white/10 p-2 rounded-full">
            {" "}
            <Facebook size={24} />
          </Link>
          <Link href="insta" className="bg-white/10 p-2 rounded-full">
            <Instagram size={24} />
          </Link>
        </div>
      </div>
      <div>
        {/* Button to toggle the menu */}
        <div className="md:hidden flex justify-between">
          <div className="block">
            <Image src="/logo_no_bg.png" width={100} height={100} alt={""} />
          </div>{" "}
          <button
            className="block text-white p-2 rounded-md md:hidden" // md:hidden hides the button on screens larger than 'md'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={cn(
                "block w-8 h-[0.2rem] bg-secy rounded-sm mb-1 transition-all ease-in-out duration-200",
                isMenuOpen && "rotate-45 "
              )}
            ></span>
            <span
              className={cn(
                "block w-9 -ml-0.5 h-[0.2rem] bg-red-500 rounded-sm mb-1 transition-all ease-in-out duration-200",
                isMenuOpen && "hidden"
              )}
            ></span>
            <span
              className={cn(
                "block w-8 h-[0.2rem] bg-secy rounded-sm transition-all ease-in-out duration-200",
                isMenuOpen && "-rotate-45 -translate-y-[0.45rem]"
              )}
            ></span>
            {/* {isMenuOpen ? "Close Menu" : "Open Menu"} */}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "absolute z-10 h-full w-full border-t bg-[#282C35] border-secy/5 p-5 transition-transform transform", // Common classes
            {
              "translate-x-0": isMenuOpen, // Menu open state
              "-translate-x-full": !isMenuOpen, // Menu closed state
            },
            "md:hidden" // Hide menu on screens larger than 'md'
          )}
        >
          {/* Menu content */}
          <nav>
            <div className="flex flex-col text-xl justify-center gap-y-4 items-center gap-x-6">
              {routes.map((item, index) => (
                <div
                  className={cn(
                    "text-white  tracking-wide",
                    item.route == pathname &&
                      "text-secy border-b border-secy transition duration-400 ease-in-out"
                  )}
                  key={index}
                >
                  <Link onClick={() => setIsMenuOpen(false)} href={item.route}>{item.name.toUpperCase()} </Link>
                </div>
              ))}
              <div className="flex items-center  text-secy gap-x-4 ">
                <Link href="facebook" className="bg-white/10 p-2 rounded-full">
                  {" "}
                  <Facebook size={24} />
                </Link>
                <Link href="insta" className="bg-white/10 p-2 rounded-full">
                  <Instagram size={24} />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
