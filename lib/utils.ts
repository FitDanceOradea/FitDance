import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const routes = [
  {
    route: "/",
    name: "acasa",
  },
{
name:"cursuri",
route:"/cursuri"
},
  {
    route: "/dans",
    name: "dansul-mirilor",
  },
  {
    route: "/galerie",
    name: "galerie",
  },
  {
    route: "/contact",
    name: "contact",
  },
];
