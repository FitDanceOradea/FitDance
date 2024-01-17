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
name:"regulament",
route:"/concurs"
},
  {
    route: "/inscriere",
    name: "inscriere",
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
